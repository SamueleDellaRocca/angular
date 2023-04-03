import { Component } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent {

  ristoranti = [
    {
      "id": "f3aecd69-fd34-5e0a-aff9-c8c653e20931",
      "restaurantName": "The Chicken Coop",
      "companyName": "Paccar Inc",
      "cuisine": [
        "Cuban",
        "Bermudian",
        "Turks and Caicos"
      ],
      "phone": "+48 91 193 80 84",
      "priceRange": [
        "$76.00",
        "$101"
      ],
      "geolocation": {
        "country": "Palau",
        "city": "The Woodlands",
        "address": "733 Price Orchard Apt. 693"
      },
      "open": {
        "closedDay": "Friday",
        "workHours": [
          8,
          19
        ]
      },
      "sideProducts": [],
      "email": "sozo@Paccar Inc.com"
    },
    {
      "id": "bfae1d21-51d6-5cc6-8308-f9367360d760",
      "restaurantName": "Just Jerks",
      "companyName": "BJ's Wholesale Club, Inc.",
      "cuisine": [
        "Grenadian",
        "Guyanese",
        "Antigua and Barbuda",
        "Anguillan"
      ],
      "phone": "+48 91 502 76 58",
      "priceRange": [
        "$26.00",
        "$145"
      ],
      "geolocation": {
        "country": "Morocco",
        "city": "Temecula",
        "address": "14236 Wyatt Radial Apt. 128"
      },
      "open": {
        "closedDay": "Saturday",
        "workHours": [
          8,
          17
        ]
      },
      "sideProducts": [
        {
          "name": "Towels",
          "material": "Steel",
          "description": "Andy shoes are designed to keeping in mind durability as well as trends, the most stylish range of shoes & sandals",
          "adjectives": "Refined",
          "color": "purple"
        }
      ],
      "email": "risewfe@BJs Wholesale Club Inc.com"
    },
    {
      "id": "d023bd3f-a982-5ffc-9ec1-ec389fcbf65e",
      "restaurantName": "Mint Kitchen",
      "companyName": "MGM Mirage",
      "cuisine": [
        "Curaçao",
        "Barbadian",
        "Cayman Islands",
        "Turks and Caicos",
        "British Virgin Islands"
      ],
      "phone": "+48 91 531 57 77",
      "priceRange": [
        "$100.00",
        "$141"
      ],
      "geolocation": {
        "country": "Slovenia",
        "city": "Plainfield",
        "address": "44987 Kessler Lights Suite 350"
      },
      "open": {
        "closedDay": "Saturday",
        "workHours": [
          9,
          15
        ]
      },
      "sideProducts": [
        {
          "name": "Gloves",
          "material": "Steel",
          "description": "The automobile layout consists of a front-engine design, with transaxle-type transmissions mounted at the rear of the engine and four wheel drive",
          "adjectives": "Recycled",
          "color": "lime"
        }
      ],
      "email": "birmecpid@MGM Mirage.com"
    },
    {
      "id": "60c11b76-ace9-549a-af49-80764d9985e7",
      "restaurantName": "The Chef Stop",
      "companyName": "Crown Cork & Seal Co. Inc.",
      "cuisine": [
        "Bahamian"
      ],
      "phone": "+48 91 286 24 31",
      "priceRange": [
        "$85.00",
        "$172"
      ],
      "geolocation": {
        "country": "Christmas Island",
        "city": "Kansas City",
        "address": "9750 Vidal Burg Apt. 807"
      },
      "open": {
        "closedDay": "Thursday",
        "workHours": [
          9,
          23
        ]
      },
      "sideProducts": [
        {
          "name": "Chips",
          "material": "Rubber",
          "description": "The Nagasaki Lander is the trademarked name of several series of Nagasaki sport bikes, that started with the 1984 ABC800J",
          "adjectives": "Practical",
          "color": "mint green"
        },
        {
          "name": "Computer",
          "material": "Steel",
          "description": "Andy shoes are designed to keeping in mind durability as well as trends, the most stylish range of shoes & sandals",
          "adjectives": "Electronic",
          "color": "indigo"
        },
        {
          "name": "Chicken",
          "material": "Rubber",
          "description": "The Nagasaki Lander is the trademarked name of several series of Nagasaki sport bikes, that started with the 1984 ABC800J",
          "adjectives": "Licensed",
          "color": "blue"
        },
        {
          "name": "Fish",
          "material": "Bronze",
          "description": "Ergonomic executive chair upholstered in bonded black leather and PVC padded seat and back for all-day comfort and support",
          "adjectives": "Practical",
          "color": "maroon"
        }
      ],
      "email": "udumu@Crown Cork  Seal Co Inc.com"
    },
    {
      "id": "9b32cb8d-e8ab-527e-85c8-3008dd9f4d5d",
      "restaurantName": "Backyard Bowls",
      "companyName": "NCR Corporation",
      "cuisine": [
        "Trinidad and Tobago",
        "Dominican Republic",
        "Antigua and Barbuda",
        "Turks and Caicos",
        "Guyanese"
      ],
      "phone": "+48 91 646 46 47",
      "priceRange": [
        "$46.00",
        "$184"
      ],
      "geolocation": {
        "country": "Cayman Islands",
        "city": "Charlotte",
        "address": "2284 Ken Estate Suite 996"
      },
      "open": {
        "closedDay": "Saturday",
        "workHours": [
          8,
          19
        ]
      },
      "sideProducts": [
        {
          "name": "Pizza",
          "material": "Metal",
          "description": "The Football Is Good For Training And Recreational Purposes",
          "adjectives": "Handcrafted",
          "color": "white"
        },
        {
          "name": "Soap",
          "material": "Plastic",
          "description": "New range of formal shirts are designed keeping you in mind. With fits and styling that will make you stand apart",
          "adjectives": "Practical",
          "color": "violet"
        },
        {
          "name": "Sausages",
          "material": "Wooden",
          "description": "New range of formal shirts are designed keeping you in mind. With fits and styling that will make you stand apart",
          "adjectives": "Recycled",
          "color": "ivory"
        },
        {
          "name": "Chips",
          "material": "Fresh",
          "description": "The automobile layout consists of a front-engine design, with transaxle-type transmissions mounted at the rear of the engine and four wheel drive",
          "adjectives": "Generic",
          "color": "olive"
        },
        {
          "name": "Cheese",
          "material": "Rubber",
          "description": "The automobile layout consists of a front-engine design, with transaxle-type transmissions mounted at the rear of the engine and four wheel drive",
          "adjectives": "Refined",
          "color": "lime"
        }
      ],
      "email": "hohgulip@NCR Corporation.com"
    },
    {
      "id": "92ad96d3-eb1d-531a-8a2c-77ade90a2190",
      "restaurantName": "The Sushi Shack",
      "companyName": "Primedia Inc",
      "cuisine": [
        "Dominican Republic",
        "Jamaican",
        "St. Kitts and Nevis",
        "British Virgin Islands",
        "US Virgin Islands"
      ],
      "phone": "+48 91 939 81 99",
      "priceRange": [
        "$74.00",
        "$116"
      ],
      "geolocation": {
        "country": "Albania",
        "city": "Mount Pleasant",
        "address": "69677 Gusikowski Brooks Apt. 525"
      },
      "open": {
        "closedDay": "Monday",
        "workHours": [
          10,
          15
        ]
      },
      "sideProducts": [
        {
          "name": "Pants",
          "material": "Frozen",
          "description": "The Nagasaki Lander is the trademarked name of several series of Nagasaki sport bikes, that started with the 1984 ABC800J",
          "adjectives": "Oriental",
          "color": "salmon"
        },
        {
          "name": "Pants",
          "material": "Plastic",
          "description": "Ergonomic executive chair upholstered in bonded black leather and PVC padded seat and back for all-day comfort and support",
          "adjectives": "Recycled",
          "color": "green"
        },
        {
          "name": "Chips",
          "material": "Soft",
          "description": "The slim & simple Maple Gaming Keyboard from Dev Byte comes with a sleek body and 7- Color RGB LED Back-lighting for smart functionality",
          "adjectives": "Luxurious",
          "color": "teal"
        },
        {
          "name": "Fish",
          "material": "Frozen",
          "description": "The automobile layout consists of a front-engine design, with transaxle-type transmissions mounted at the rear of the engine and four wheel drive",
          "adjectives": "Awesome",
          "color": "indigo"
        },
        {
          "name": "Hat",
          "material": "Fresh",
          "description": "New ABC 13 9370, 13.3, 5th Gen CoreA5-8250U, 8GB RAM, 256GB SSD, power UHD Graphics, OS 10 Home, OS Office A & J 2016",
          "adjectives": "Intelligent",
          "color": "ivory"
        }
      ],
      "email": "alese@Primedia Inc.com"
    },
    {
      "id": "d3532702-de6e-52f6-b341-38496066e70b",
      "restaurantName": "Pig ‘n Pancake",
      "companyName": "Xcel Energy Inc",
      "cuisine": [
        "Saint Lucian"
      ],
      "phone": "+48 91 062 07 79",
      "priceRange": [
        "$50.00",
        "$141"
      ],
      "geolocation": {
        "country": "Maldives",
        "city": "Urbana",
        "address": "63311 Schowalter Heights Apt. 418"
      },
      "open": {
        "closedDay": "Saturday",
        "workHours": [
          10,
          12
        ]
      },
      "sideProducts": [],
      "email": "jotakob@Xcel Energy Inc.com"
    },
    {
      "id": "db1d3925-e141-5908-9733-4ce107df43f6",
      "restaurantName": "The Lunch Hour",
      "companyName": "Xcel Energy Inc",
      "cuisine": [
        "Bermudian",
        "Dominican Republic"
      ],
      "phone": "+48 91 013 73 54",
      "priceRange": [
        "$89.00",
        "$176"
      ],
      "geolocation": {
        "country": "Cambodia",
        "city": "Dubuque",
        "address": "58546 Terry Curve Apt. 133"
      },
      "open": {
        "closedDay": "Monday",
        "workHours": [
          8,
          18
        ]
      },
      "sideProducts": [
        {
          "name": "Sausages",
          "material": "Rubber",
          "description": "The Nagasaki Lander is the trademarked name of several series of Nagasaki sport bikes, that started with the 1984 ABC800J",
          "adjectives": "Oriental",
          "color": "red"
        },
        {
          "name": "Soap",
          "material": "Plastic",
          "description": "The automobile layout consists of a front-engine design, with transaxle-type transmissions mounted at the rear of the engine and four wheel drive",
          "adjectives": "Tasty",
          "color": "magenta"
        },
        {
          "name": "Bacon",
          "material": "Plastic",
          "description": "The Apollotech B340 is an affordable wireless mouse with reliable connectivity, 12 months battery life and modern design",
          "adjectives": "Gorgeous",
          "color": "green"
        },
        {
          "name": "Car",
          "material": "Concrete",
          "description": "The Nagasaki Lander is the trademarked name of several series of Nagasaki sport bikes, that started with the 1984 ABC800J",
          "adjectives": "Intelligent",
          "color": "maroon"
        },
        {
          "name": "Bacon",
          "material": "Bronze",
          "description": "The Apollotech B340 is an affordable wireless mouse with reliable connectivity, 12 months battery life and modern design",
          "adjectives": "Intelligent",
          "color": "purple"
        }
      ],
      "email": "arva@Xcel Energy Inc.com"
    },
    {
      "id": "332293cc-4e55-55fa-af16-6a582a559290",
      "restaurantName": "The Salty Potato",
      "companyName": "Apple Computer, Inc.",
      "cuisine": [
        "Haitian",
        "Montserrat"
      ],
      "phone": "+48 91 849 48 28",
      "priceRange": [
        "$51.00",
        "$174"
      ],
      "geolocation": {
        "country": "Peru",
        "city": "Elyria",
        "address": "73975 Mose Courts Apt. 519"
      },
      "open": {
        "closedDay": "Thursday",
        "workHours": [
          8,
          21
        ]
      },
      "sideProducts": [
        {
          "name": "Shirt",
          "material": "Plastic",
          "description": "Carbonite web goalkeeper gloves are ergonomically designed to give easy fit",
          "adjectives": "Incredible",
          "color": "sky blue"
        },
        {
          "name": "Bike",
          "material": "Rubber",
          "description": "The Football Is Good For Training And Recreational Purposes",
          "adjectives": "Handmade",
          "color": "plum"
        },
        {
          "name": "Fish",
          "material": "Granite",
          "description": "The automobile layout consists of a front-engine design, with transaxle-type transmissions mounted at the rear of the engine and four wheel drive",
          "adjectives": "Ergonomic",
          "color": "olive"
        },
        {
          "name": "Hat",
          "material": "Plastic",
          "description": "Andy shoes are designed to keeping in mind durability as well as trends, the most stylish range of shoes & sandals",
          "adjectives": "Modern",
          "color": "orange"
        }
      ],
      "email": "jocboom@Apple Computer Inc.com"
    },
    {
      "id": "a8968e55-2ef6-52f2-9cce-2d9999751af5",
      "restaurantName": "Egglectic Cafe",
      "companyName": "Brown Shoe Company, Inc.",
      "cuisine": [
        "Dominican Republic",
        "Grenadian",
        "Martinican",
        "Antigua and Barbuda",
        "Saint Lucian"
      ],
      "phone": "+48 91 188 04 08",
      "priceRange": [
        "$28.00",
        "$132"
      ],
      "geolocation": {
        "country": "Gabon",
        "city": "Berwyn",
        "address": "7283 Vladimir Knoll Suite 491"
      },
      "open": {
        "closedDay": "Thursday",
        "workHours": [
          12,
          22
        ]
      },
      "sideProducts": [
        {
          "name": "Table",
          "material": "Fresh",
          "description": "Carbonite web goalkeeper gloves are ergonomically designed to give easy fit",
          "adjectives": "Intelligent",
          "color": "orange"
        },
        {
          "name": "Ball",
          "material": "Concrete",
          "description": "The Football Is Good For Training And Recreational Purposes",
          "adjectives": "Licensed",
          "color": "magenta"
        },
        {
          "name": "Keyboard",
          "material": "Concrete",
          "description": "The Football Is Good For Training And Recreational Purposes",
          "adjectives": "Unbranded",
          "color": "silver"
        },
        {
          "name": "Pants",
          "material": "Metal",
          "description": "The beautiful range of Apple Naturalé that has an exciting mix of natural ingredients. With the Goodness of 100% Natural Ingredients",
          "adjectives": "Ergonomic",
          "color": "grey"
        },
        {
          "name": "Gloves",
          "material": "Rubber",
          "description": "Boston's most advanced compression wear technology increases muscle oxygenation, stabilizes active muscles",
          "adjectives": "Practical",
          "color": "plum"
        },
        {
          "name": "Computer",
          "material": "Concrete",
          "description": "Boston's most advanced compression wear technology increases muscle oxygenation, stabilizes active muscles",
          "adjectives": "Electronic",
          "color": "sky blue"
        }
      ],
      "email": "oko@Brown Shoe Company Inc.com"
    }
  ]

}
