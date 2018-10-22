exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('items').del()
    .then(function () {
      // Inserts seed entries
      return knex('items').insert([
        {
          restaurant_id: 1, 
          name: 'Black Cod', 
          price: '25', 
          descriptions: 'Saskatchewan chanterelles, sunflower seed fat, spinach', 
          allergens: 'sunflower seeds',
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          restaurant_id: 1, 
          name: 'Giant Clam', 
          price: '18', 
          descriptions: 'Buttermilk whey, smoked potato, celery', 
          allergens: 'diary, seafood',
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          restaurant_id: 1, 
          name: 'Creek Raised Trout', 
          price: '27', 
          descriptions: 'cured, smoked, warmed in cedar | sandwich of skin, roe, spine meat, horseradish mayonnaise', 
          allergens: 'seafood',
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          restaurant_id: 1, 
          name: 'Squash Blossom', 
          price: '18', 
          descriptions: 'Stuffed with lamb, grilled olives, pollen sauce blue maize cornbread & cultured butter', 
          allergens: 'pollen',
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          restaurant_id: 1, 
          name: 'Wild Boar Rib', 
          price: '32', 
          descriptions: 'Eucalyptus, fennel pollen, pine needle', 
          allergens: 'pollen',
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          restaurant_id: 2, 
          name: 'Herb Crusted Loin of Lamb', 
          price: '27', 
          descriptions: 'Herb Crusted Loin of Lamb with Summer Vegetable Tian and Polenta', 
          allergens: 'N/A',
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          restaurant_id: 2, 
          name: 'Mousseline Wrapped Pork Tenderloin', 
          price: '18', 
          descriptions: 'Mousseline Wrapped Pork Tenderloin with Braised Cheeks, Cranberry Beans, Favas and Fennel Confit', 
          allergens: 'beans',
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          restaurant_id: 2, 
          name: 'Horseradish Crusted Salmon Medallion', 
          price: '24', 
          descriptions: 'Horseradish Crusted Salmon Medallion with Dilled Cucumbers and Mustard Sauce ', 
          allergens: 'horseradish, mustard, seafood',
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          restaurant_id: 2, 
          name: 'Seared Filet of Beef', 
          price: '32', 
          descriptions: 'Cumin Potatoes, Swiss Chard, Tomato-Corn Relish and Basil Butter', 
          allergens: 'diary',
          created_at: new Date(),
          updated_at: new Date()
        },        {
          restaurant_id: 3, 
          name: 'Hideaki Omakase', 
          price: '150', 
          descriptions: '2 Appetizer, 1 Sashimi, 10 pcs Nigiri, 1 Owan', 
          allergens: 'seafood',
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          restaurant_id: 3, 
          name: 'Yamato Omakase', 
          price: '200', 
          descriptions: '2 Appetizer, 2 Sashimi, 1 Yakimono, 12 pcs Nigiri, 1 Owan', 
          allergens: 'seafood',
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          restaurant_id: 4, 
          name: 'Ahi Tuna Poke', 
          price: '18', 
          descriptions: 'Marinated raw tuna, avocado, mango, sesame-soy sauce and wasabi aioli', 
          allergens: 'seafood',
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          restaurant_id: 4, 
          name: 'Shellfish Tower', 
          price: '88', 
          descriptions: '½ Maine lobster, ½ cracked Dungeness crab, 6 fresh shucked oysters, 6 jumbo shrimp, 6 mussels, Dungeness crab ceviche served with cocktail sauce and mignonette', 
          allergens: 'seafood',
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          restaurant_id: 4, 
          name: 'California Crab and Avocado Caesar Salad', 
          price: '29', 
          descriptions: 'Bacon, avocado, queso fresco, tortilla strips, cilantro leaves, chopped romaine topped with Dungeness crab meat', 
          allergens: 'seafood',
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          restaurant_id: 5, 
          name: 'Hakata Tonkotsu', 
          price: '13', 
          descriptions: 'Chashu Pork (Simmered Pork Belly), Seasoned Soft Boiled Egg, Green Onions, Kikurage Mushrooms, and Bean Sprouts', 
          allergens: 'mushroom ',
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          restaurant_id: 5, 
          name: 'Hakata Deluxe', 
          price: '17', 
          descriptions: 'Buta Kakuni (Braised Thick Pork Belly), Chashu Pork (Simmered Pork Belly), Seasoned Soft Boiled Egg, Green Onions, Kikurage Mushrooms, Bean Sprouts, Sweet Corn, and Nori Seaweed', 
          allergens: 'mushroom',
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          restaurant_id: 5, 
          name: 'Chicken Paitan', 
          price: '13', 
          descriptions: 'Chashu Chicken (Chicken Breast), Seasoned Soft Boiled Egg, Green Onions, Kikurage Mushrooms, and Bean Sprouts', 
          allergens: 'mushroom',
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          restaurant_id: 5, 
          name: 'Chicken Paitan Deluxe (Limited Servings)', 
          price: '17', 
          descriptions: 'Grilled Chicken Leg on a Sizzling Plate, Chashu Chicken (Chicken Breast), Seasoned Soft Boiled Egg, Green Onions, Kikurage Mushrooms, Bean Sprouts, Sweet Corn, and Nori Seaweed', 
          allergens: 'mushroom',
          created_at: new Date(),
          updated_at: new Date()
        }
      ]);
    });
};
