// ChakulaChap Database - Update this with real data
const campusDatabase = {
    "uo_nairobi": {
        "name": "University of Nairobi",
        "locations": ["Main Campus", "Chiromo", "Kikuyu", "Lower Kabete"],
        "vendors": [
            {
                "name": "Main Cafeteria",
                "location": "Central Campus",
                "budget": "low",
                "meals": [
                    {"name": "Githeri", "price": 50, "health": 4},
                    {"name": "Ugali Sukuma", "price": 70, "health": 4},
                    {"name": "Rice Beans", "price": 80, "health": 4}
                ]
            },
            {
                "name": "Taifa Food Court",
                "location": "Student Centre",
                "budget": "medium",
                "meals": [
                    {"name": "Chips Sausage", "price": 150, "health": 2},
                    {"name": "Chicken Burger", "price": 200, "health": 3},
                    {"name": "Fruit Salad", "price": 100, "health": 5}
                ]
            }
        ]
    },
    "ku": {
        "name": "Kenyatta University",
        "locations": ["Main Campus", "Ruaka"],
        "vendors": [
            {
                "name": "KU Main Mess",
                "location": "Near Hall 7",
                "budget": "low",
                "meals": [
                    {"name": "Rice Beans", "price": 60, "health": 4},
                    {"name": "Ugali Beef", "price": 120, "health": 3},
                    {"name": "Spaghetti", "price": 80, "health": 3}
                ]
            }
        ]
    }
};

// Weekly meal plans
const weeklyPlans = {
    "500": [
        "Monday: Githeri (50) + Banana (20) = Ksh 70",
        "Tuesday: Ugali Sukuma (70) + Orange (15) = Ksh 85",
        "Wednesday: Chapati Beans (60) + Spinach (10) = Ksh 70",
        "Thursday: Rice Beans (60) + Tomato (10) = Ksh 70",
        "Friday: Githeri (50) + Avocado (30) = Ksh 80",
        "Saturday: DIY pasta (80) = Ksh 80",
        "Sunday: Treat day - Chips (100) = Ksh 100",
        "TOTAL: Ksh 555 (extra Ksh 55 for emergencies)"
    ],
    "1000": [
        "Add eggs 3x week (+Ksh 60)",
        "Fruits daily (+Ksh 140)",
        "One meat dish (+Ksh 200)",
        "Milk/tea daily (+Ksh 70)",
        "Still have Ksh 130 for snacks!"
    ]
};

// Survival hacks by campus
const campusHacks = {
    "uo_nairobi": [
        "Visit Kalimoni Market on Saturdays for cheap vegetables",
        "Hostel B kiosk has 50% off mandazis after 7 PM",
        "Use Student ID at Taifa Food Court for 10% discount"
    ],
    "ku": [
        "KU Main Mess has 'double portion' for Ksh 20 extra",
        "Saturday market near gate has 3 tomatoes for Ksh 10",
        "Water dispenser at library is free - bring your bottle"
    ]
};

// Export if using modules
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { campusDatabase, weeklyPlans, campusHacks };
}