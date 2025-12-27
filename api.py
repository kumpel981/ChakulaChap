from flask import Flask, request, jsonify
from flask_cors import CORS
import json
import random

app = Flask(__name__)
CORS(app)  # Allow web app to connect

# Load database
with open('database.json', 'r') as f:
    database = json.load(f)

@app.route('/api/suggest', methods=['GET'])
def suggest_meals():
    campus = request.args.get('campus', 'uo_nairobi')
    budget = float(request.args.get('budget', 100))
    
    # Filter meals
    campus_data = database.get(campus, database['uo_nairobi'])
    meals = campus_data.get('meals', [])
    
    affordable = [m for m in meals if m['price'] <= budget]
    
    # Sort by value
    for meal in affordable:
        meal['value'] = (meal['health'] * 10) / meal['price']
    
    affordable.sort(key=lambda x: x['value'], reverse=True)
    
    return jsonify({
        'campus': campus_data['name'],
        'budget': budget,
        'count': len(affordable),
        'meals': affordable[:5],
        'cheapest': min(meals, key=lambda x: x['price']) if meals else None
    })

@app.route('/api/submit', methods=['POST'])
def submit_data():
    data = request.json
    # Here you would save to Google Sheets or database
    return jsonify({'status': 'success', 'message': 'Data received'})

@app.route('/api/weekly-plan/<budget>')
def weekly_plan(budget):
    plans = {
        '500': ["Githeri daily with variations", "Fruits 3x week"],
        '1000': ["Add protein daily", "Balanced meals"]
    }
    return jsonify({'budget': budget, 'plan': plans.get(budget, [])})

if __name__ == '__main__':
    app.run(debug=True, port=5000)