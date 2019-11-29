require("dotenv").config();

const mongoose = require("mongoose");
const Poi = require("../models/POI");
const data = require("./data");
const URI = process.env.HEROKU_MONGOLAB_URI;

const cities = [
  {
   
    city_name: "Barcelona",
    city_description:
     "Barcelona is one of the world's leading tourist, economic, trade fair and cultural centres, and its influence in commerce, education, entertainment, sports, media, fashion, science, and the arts all contribute to its status as one of the major global cities. Here you’ll find your full itinerary for your weekend getaway in the beautiful city of Barcelona!",
    country: "Spain",
    currency: "Euro",
    language: "Castilian and Catalan",
    steps: [
      {
        day: 1,
        name: "Flax & Kale",
        description:
        
         "Healthy Flexiteriana Cooking Restaurant by Teresa Carles. Their goal is to show that healthy cooking can be deliciously exciting.",
        photo:
          "",
        website:
          "https://www.tripadvisor.pt/Restaurant_Review-g187497-d6996799-Reviews-Flax_Kale-Barcelona_Catalonia.html"
      },
      {
        day: 1,
        name: "Barri Gòtic and Barcelona Cathedral",
        description:
        "Stroll around Barcelona’s Barri Gòtic and see Barcelona Cathedral. The Cathedral of the Holy Cross and Saint Eulalia, also known as Barcelona Cathedral, is the Gothic cathedral and seat of the Archbishop of Barcelona, Catalonia, Spain. It was constructed between the thirteenth and fifteenth centuries. The roof is notable for its gargoyles, featuring a wide range of animals, both domestic and mythical.
          ,
        photo:
          "",
        website:
          "https://catedralbcn.org/index.php?lang=en"
      },
      {
        day: 1,
        name: "Meson Jesus Restaurant",
        description:
          "A hidden gem where you can eat real spanish food just like a grandmother would make it. Great for tapas with friends and receiver of tripadvisor certificate of excellence",
        photo:
          "",
        website:
         "https://www.tripadvisor.pt/Restaurant_Review-g187497-d717342-Reviews-MESON_JESUS-Barcelona_Catalonia.html"
      },
      {
        day: 1,
        name: "Sagrada Familia",
        description:
          "The Basílica de la Sagrada Família is a large unfinished Roman Catholic minor basilica. Designed by Catalan architect Antoni Gaudí (1852–1926), his work on the building is part of a UNESCO World Heritage Site. This is one of most emblematic sites in whole of Barcelona and a must see",
        photo:
          "",
        website: "https://sagradafamilia.tickets-barcelona.org/pt/?gclid=Cj0KCQiAoIPvBRDgARIsAHsCw09S6o_kGEXiihqrPecGpQ6JibVdlx92GxMr3rckRdutrjao664DulUaAq5GEALw_wcB"
      },
      {
        day: 1,
        name: "La Boqueria Restaurant",
        description:
          "Founded in 2005, in the emblematic Gothic Quarter, La Boquería Restaurant starts its journey specializing in tapas, paellas, seafood and our selection of dry-aged beef in our charcoal grill. Sharing the culinary experience of traditional Spanish and Catalan market food. Influenced by the neighborhood and the proximity of the La Boquería market, our cuisine has always been in constant evolution without losing the values of our origins.",
        photo:
          "",
        website:
          "https://www.tripadvisor.com/Restaurant_Review-g187497-d8384662-Reviews-Restaurante_La_Boqueria-Barcelona_Catalonia.html"
      },
      {
        day: 1,
        name: "The Magic Fountain",
        description:
          "The Font Màgica, or Magic Fountain, is the main feature of a complex of fountains, cascades and pools on Avinguda de la Reina Maria Cristina, the street running from the Palau Nacional to Plaça d'Espanya in Montjuïc. The beautiful light show is better seen during nightime",
        photo:
          "",
        website: "https://www.barcelona.cat/en/what-to-do-in-bcn/magic-fountain"
      },
      {
        day: 2,
        name: "Chök The Chocolate Kitchen",
        description:
          "Start the day with the sweetest of breakfasts. Chök is a place dedicated to chocolate, to enjoy and share. A place where the warmth of a kitchen is combined with absolute freedom for creation. The result is both unique and delicious.",
        photo:
          "",
        website:
          "https://www.tripadvisor.pt/Restaurant_Review-g187497-d4697511-Reviews-Chok_The_Chocolate_Kitchen-Barcelona_Catalonia.html"
      },
      {
        day: 2,
        name: "Park Güell",
        description:
          "The Park Güell is a public park system composed of gardens and architectonic elements located on Carmel Hill. With urbanization in mind, Eusebi Güell assigned the design of the park to Antoni Gaudí.  In 1984, UNESCO declared the park a World Heritage Site under Works of Antoni Gaudí. A proper must see location when in Barcelona"
        photo:
          "",
        website:
          "https://www.parkguelltickets.org/?gclid=Cj0KCQiAoIPvBRDgARIsAHsCw09O3kJC_K3L02dyjM4TEcTES3UBX147-Zq6Tq__T5wc-53acyxVg9YaAgfYEALw_wcB"
      },
      {
        day: 2,
        name: "Restaurant Caravelle",
        description:
          "A fresh and cool restaurant in a vibrant Barcelona neighborhoob. At Caravelle    all their ingredients are market-sourced, freshly cooked and always seasonal. The Tacos are piled high with home-made pickles, crispy fried fish, smoked carnitas, tender beef, rotisserie chicken, truffled mushrooms and lots more. The Caravelle Double Cheeseburger packs a double patty, bacon jam, bacon, trashy cheddar & home-made pickles. Try it with a liberal sprinkling of Caravelle Hot Sauce.",
        photo:
          "",
        website:
          "https://www.tripadvisor.com/Restaurant_Review-g187497-d3499028-Reviews-Caravelle-Barcelona_Catalonia.html"
      },
      {
        day: 2,
        name: "Walk through the Ramblas and visit the Boqueria Market",
        description:
          "The famous Ramblas are a central avenue, which runs through the city center. It is a lively and dynamic avenue, full of the best that happens in Barcelona and often filled with street performances. During your walk visit the Mercat de Sant Josep, popularly known as La Boquería. This municipal market besides being a place where you can buy all kinds of fresh produce, it is also a major tourist attraction",
        photo:
          "",
        website: "http://www.boqueria.barcelona/home"
      },
      {
        day: 2,
        name: "Restaurant Nou Celler",
        description:
          "Located on the popular Carrer Princesa in the El Born neighbourhood of Barcelona, it would be fair to assume that Nou Cellar caters mostly to the tourist crowds – not so. Locals know that this is a serious establishment which prides itself on serving authentic Catalan cuisine.",
        photo:
          "",
        website:
          "https://www.tripadvisor.com/Restaurant_Review-g187497-d1100311-Reviews-Nou_Celler-Barcelona_Catalonia.html"
      },
      {
        day: 2,
        name: "Casa Mila (La Pedrera) and Casa Batlló ",
        description:
          "Take an evening stroll and make your way to these iconic Gaudí designed buildings. This will give you a chance to not only enjoy the street views of Barcelona but also admire some incredible architecture",
        photo:
          "",
        website:
          "https://www.tiqets.com/en/barcelona-c66342/casa-mila-la-pedrera-l145464"
      }
    ]
  },
  {
    // _id: "1",
    city_name: "Copenhagen",
    city_description:
      "The premier capital of Northern Europe is Scandinavia's most fantastic city and the center of the most dynamic region in Europe, the Øresund Region. The city is one of Europe's oldest capitals with an exclusive royal touch - the monarchy in Denmark is the oldest in the world. Here you’ll find your full itinerary for your weekend getaway in the beautiful city of Copenhagen!",
    country: "Denmark",
    currency: "Danish Krone",
    language: "Danish",
    steps: [
      {
        day: 1,
        name: "Mad & Kaffe",
        description:
          "With its string of cosy rooms and summertime outdoor tables, casual 'Food & Coffee' is especially popular for its breakfast; choose three, five or seven items to create your morning meal. We prefer lunching here; the smørrebrød options are gorgeous and generous, with combos like avocado with cottage cheese, baked almonds and pickled red onions.",
        photo:
          "https://res.cloudinary.com/nena/image/upload/c_scale,h_641,q_100/v1574677905/ProjectTwo-EleniAndMaria/Copenhagen/Mad_Kaffe_q9tdiw.png",
        website:
          "https://www.tripadvisor.com/Restaurant_Review-g189541-d9814948-Reviews-Mad_Kaffe-Copenhagen_Zealand.html"
      },
      {
        day: 1,
        name: "Amalienborg Palace",
        description:
          "Amalienborg is the home of the Danish royal family, and is located in Copenhagen, Denmark. It consists of four identical classical palace façades with rococo interiors around an octagonal courtyard (Danish: Amalienborg Slotsplads); in the centre of the square is a monumental equestrian statue of Amalienborg's founder, King Frederick V. Amalienborg was originally built for four noble families; however, when Christiansborg Palace burned on 26 February 1794, the royal family bought the palaces and moved in. Over the years various monarchs and their families have resided in the four different palaces.",
        photo:
          "https://res.cloudinary.com/nena/image/upload/c_scale,h_641,q_100/v1574677905/ProjectTwo-EleniAndMaria/Copenhagen/Amalienborg_Palace_xeswxb.png",
        website:
          "https://www.kongeligeslotte.dk/en/palaces-and-gardens/amalienborg-palace.html"
      },
      {
        day: 1,
        name: "KoD Copenhagen",
        description:
          "The concept is simple: perfectly cooked steaks with delicious side orders, favoured wine of high quality, and last but not least: an atmosphere that makes you want to come back.",
        photo:
          "https://res.cloudinary.com/nena/image/upload/c_scale,h_641,q_100/v1574677899/ProjectTwo-EleniAndMaria/Copenhagen/KoD_Copenhagen_jxspe5.png",
        website:
          "https://www.tripadvisor.com/Restaurant_Review-g189541-d8153427-Reviews-KoD_Copenhagen-Copenhagen_Zealand.html"
      },
      {
        day: 1,
        name: "Tivoli Gardens",
        description:
          "Tivoli Gardens, is an amusement park and pleasure garden in Copenhagen. The park opened on 15 August 1843 and is the second-oldest operating amusement park in the world!",
        photo:
          "https://res.cloudinary.com/nena/image/upload/c_scale,h_641,q_100/v1574677908/ProjectTwo-EleniAndMaria/Copenhagen/Tivoli_Gardens_amwxg4.png",
        website: "https://www.tivoli.dk/en/"
      },
      {
        day: 1,
        name: "Restaurant Havfruen",
        description:
          "Restaurant Havfruen is a seafood bistro, located in the historic, charming and lively area of Nyhavn in central Copenhagen. It has been a restaurant since 1937 and the building is from the 16th century. The focal point of Havfruen is naturally the best fish and shellfish from the waters around us, a part from our oysters from France and lobster from Canada.",
        photo:
          "https://res.cloudinary.com/nena/image/upload/c_scale,h_641,q_100/v1574677905/ProjectTwo-EleniAndMaria/Copenhagen/Restaurant_Havfruen_raa2zr.png",
        website:
          "https://www.tripadvisor.com/Restaurant_Review-g189541-d1495437-Reviews-Restaurant_Havfruen-Copenhagen_Zealand.html"
      },
      {
        day: 1,
        name: "Nyhavn",
        description:
          "Originally, Nyhavn was a busy commercial port where ships from all over the world would dock. The area was packed with sailors, ladies of pleasure, pubs and alehouses. Today the beautiful old houses have been renovated and restaurants dominate the old port. Nyhavn is filled with people enjoying the relaxed atmosphere by the canal, jazz music and great food.",
        photo:
          "https://res.cloudinary.com/nena/image/upload/c_scale,h_641,q_100/v1574677908/ProjectTwo-EleniAndMaria/Copenhagen/Nyhavn_bpch3k.png",
        website: "https://www.nyhavn.com/"
      },
      {
        day: 2,
        name: "Flottenheimer",
        description:
          "You can get everything from yogurt with fresh fruits and muesli to pancakes, freshly baked bread, freshly squeezed juice and excellent coffee. If you do not come for brunch, the cafe also has a good menu where the burgers and chili con carn as well as the Mexican pancakes are especially recommended.",
        photo:
          "https://res.cloudinary.com/nena/image/upload/c_scale,h_641,q_100/v1574677901/ProjectTwo-EleniAndMaria/Copenhagen/Flottenheimer_iq55zl.png",
        website:
          "https://www.tripadvisor.com/Restaurant_Review-g189541-d1013006-Reviews-Flottenheimer-Copenhagen_Zealand.html"
      },
      {
        day: 2,
        name: "National Museum of Denmark",
        description:
          "The National Museum of Denmark in Copenhagen is Denmark’s largest museum of cultural history, comprising the histories of Danish and foreign cultures, alike. The museum's main building is located a short distance from Strøget at the center of Copenhagen.",
        photo:
          "https://res.cloudinary.com/nena/image/upload/c_scale,h_641,q_100/v1574677906/ProjectTwo-EleniAndMaria/Copenhagen/National_Museum_of_Denmark_qnuteo.png",
        website:
          "https://en.natmus.dk/museums-and-palaces/the-national-museum-of-denmark/information-for-tourists/"
      },
      {
        day: 2,
        name: "Restaurant Puk",
        description:
          "Restaurant Puk is a classic and historic Danish restaurant in the very heart of Copenhagen. It is one of the oldest restaurants in Copenhagen with a history dating back to 1750. In the late 19th century King Christian VII and his mistress were regular guests in this charming establishment. You can enjoy all the classic Danish dishes here in very charming surroundings. Every morning our chefs prepare homemade food, that is made with love and pride for tradional Danish cooking. Everything is made from the ground, using only the best product from local Danish farmers.",
        photo:
          "https://res.cloudinary.com/nena/image/upload/c_scale,h_641,q_100/v1574677908/ProjectTwo-EleniAndMaria/Copenhagen/Restaurant_Puk_mifsm8.png",
        website:
          "https://www.tripadvisor.com/Restaurant_Review-g189541-d785704-Reviews-Restaurant_Puk-Copenhagen_Zealand.html"
      },
      {
        day: 2,
        name: "King’s Garden",
        description:
          "This is, quite possibly, the most quaint park called Kongens Have, or the King’s Garden, which is one of the most popular local spots to hang out. A visit to the King's Garden is definitely one of the best things to do in Copenhagen.",
        photo:
          "https://res.cloudinary.com/nena/image/upload/c_scale,h_641,q_100/v1574677903/ProjectTwo-EleniAndMaria/Copenhagen/King_s_Garden_kokhdt.png",
        website: "http://www.kobenhavnergron.dk/place/kongens-have/?lang=en"
      },
      {
        day: 2,
        name: "Restaurant Tight",
        description:
          "A place where the Nordic kitchen is interpreted through International view and inspiration from all over the World. South- and Central America, the Carribies, Asia and Hawaii.",
        photo:
          "https://res.cloudinary.com/nena/image/upload/c_scale,h_641,q_100/v1574677901/ProjectTwo-EleniAndMaria/Copenhagen/Restaurant_Tight_jkdo0n.png",
        website:
          "https://www.tripadvisor.com/Restaurant_Review-g189541-d1528309-Reviews-Restaurant_Tight-Copenhagen_Zealand.html"
      },
      {
        day: 2,
        name: "Statue of Andersen",
        description:
          "If you enjoy walking while in a new city be sure to set your director include a walk to the HC Anderson monument. The statue stands at an impressive location with the vast plads the old buildings.",
        photo:
          "https://res.cloudinary.com/nena/image/upload/c_scale,h_641,q_100/v1574677904/ProjectTwo-EleniAndMaria/Copenhagen/Statue_of_Andersen_qcofnn.png",
        website:
          "https://www.routesnorth.com/copenhagen/hans-christian-andersen-sights-in-copenhagen/"
      }
    ]
  },
  {
    // _id: "2",
    city_name: "Amsterdam",
    city_description:
      "Amsterdam is colloquially known as Venice of the North because of its lovely canals that criss-cross the city, its impressive architecture and more than 1,500 bridges. There is something for every traveller's taste here; whether you prefer culture and history, serious partying, or just the relaxing charm of an old European city.",
    country: "Netherlands",
    currency: "Euro",
    language: "Dutch",
    steps: [
      {
        day: 1,
        name: "Instock",
        description:
          "At restaurant Instock in Amsterdam, the chefs create the most delicious breakfast and brunch from food surplus. If you don’t eat meat or fish, that’s no problem. They always serve a vegetarian menu as well!",
        photo:
          "https://res.cloudinary.com/nena/image/upload/c_scale,h_641,q_100/v1574684202/ProjectTwo-EleniAndMaria/Copenhagen/Amsterdam/Instock_Amsterdam_w7srph.png",
        website:
          "https://www.tripadvisor.com/Restaurant_Review-g188590-d7083401-Reviews-Instock_Amsterdam-Amsterdam_North_Holland_Province.html"
      },
      {
        day: 1,
        name: "Keukenhof Castle",
        description:
          "A wander around the castle brings new life to the 400-year old history. Learn about the previous inhabitants through a large collection of painted portraits, furniture and decor that spans the styles of each century. Then head outside to view the unique sculpture collection, or to look for the ‘hidden’ gardens tucked away on the wooded estate.",
        photo:
          "https://res.cloudinary.com/nena/image/upload/c_scale,h_641,q_100/v1574684206/ProjectTwo-EleniAndMaria/Copenhagen/Amsterdam/Keukenhof_Castle_epkae9.png",
        website:
          "https://www.holland.com/global/tourism/destinations/provinces/south-holland/keukenhof-castle.htm"
      },
      {
        day: 1,
        name: "Olijfje",
        description:
          "At Mediterranean tapas restaurant Olijfje, food lovers will experience fresh meat, fish, delicious wine and a warmly typical Mediterranean hospitality. It is not like any other restaurant.  It’s an unforgettable experience in a cozy atmosphere.",
        photo:
          "https://res.cloudinary.com/nena/image/upload/c_scale,h_641,q_100/v1574684207/ProjectTwo-EleniAndMaria/Copenhagen/Amsterdam/Olijfje_prab4r.png",
        website:
          "https://www.tripadvisor.com/Restaurant_Review-g188590-d2044977-Reviews-Restaurant_Olijfje-Amsterdam_North_Holland_Province.html"
      },
      {
        day: 1,
        name: "Butterfly Pavilion at ARTIS Amsterdam Royal Zoo",
        description:
          "The Butterfly Pavilion is a great place to spend a cold, rainy afternoon in Amsterdam. Located in ARTIS Amsterdam Royal Zoo, there are over a thousand butterflies flying freely in the 1,000 m2 tropical interior. Amsterdam's Butterfly Pavilion is the largest in the Netherlands, and is a delight for all ages.",
        photo:
          "https://res.cloudinary.com/nena/image/upload/c_scale,h_641,q_100/v1574684206/ProjectTwo-EleniAndMaria/Copenhagen/Amsterdam/Butterfly_Pavilion_at_ARTIS_Amsterdam_Royal_Zoo_uemojl.png",
        website:
          "https://www.iamsterdam.com/en/see-and-do/things-to-do/attractions-and-sights/places-of-interest/butterfly-pavilion-at-artis-amsterdam-royal-zoo"
      },
      {
        day: 1,
        name: "Ashoka",
        description:
          "The Ashoka  restaurant dishes are a mix of quality and authenticity. Their mission is to offer authentic delicious Indian and Nepalese cuisine. ",
        photo:
          "https://res.cloudinary.com/nena/image/upload/c_scale,h_641,q_100/v1574684210/ProjectTwo-EleniAndMaria/Copenhagen/Amsterdam/Ashoka_zdaa57.png",
        website:
          "https://www.tripadvisor.com/Restaurant_Review-g188590-d4328782-Reviews-Ashoka_Amsterdam_Centrum-Amsterdam_North_Holland_Province.html"
      },
      {
        day: 1,
        name: "Canal Ring",
        description:
          "A UNESCO World Heritage Site, the Canal Ring was dug in the 17th century to attract wealthy home owners. It is still a posh neighbourhood with many Dutch celebrities owning property. The Leidseplein and Rembrandtplein are the city's prime nightlife spots.",
        photo:
          "https://res.cloudinary.com/nena/image/upload/c_scale,h_641,q_100/v1574684210/ProjectTwo-EleniAndMaria/Copenhagen/Amsterdam/canal_ring_kebcuc.png",
        website:
          "https://www.iamsterdam.com/en/about-amsterdam/overview/history-and-society/canal-ring"
      },
      {
        day: 2,
        name: "Meatless District",
        description:
          "Located at the Bilderdijkstraat, in the heart of the Old West area in Amsterdam and in the van Woustraat in the famous ‘de Pijp’ Area, Meatless District is open every day. In the open kitchen, you can see the chefs prepare beautiful dishes, always freshly made and if possible organic and homemade.",
        photo:
          "https://res.cloudinary.com/nena/image/upload/c_scale,h_641,q_100/v1574684203/ProjectTwo-EleniAndMaria/Copenhagen/Amsterdam/Meatless_District_hpvdwo.png",
        website:
          "https://www.tripadvisor.com/Restaurant_Review-g188590-d10380924-Reviews-Meatless_District-Amsterdam_North_Holland_Province.html"
      },
      {
        day: 2,
        name: "Rijksmuseum",
        description:
          "The Rijksmuseum is one of Amsterdam’s grandest and most popular museums. Its vast collection showcases iconic art and a wide variety of artefacts that reflect more than 800 years of Dutch and global history, including jaw dropping paintings by the likes of Rembrandt, Van Gogh and countless more Dutch greats.",
        photo:
          "https://res.cloudinary.com/nena/image/upload/c_scale,h_641,q_100/v1574684204/ProjectTwo-EleniAndMaria/Copenhagen/Amsterdam/Rijksmuseum_vxzts1.png",
        website: "https://www.rijksmuseum.nl/"
      },
      {
        day: 2,
        name: "The good companion",
        description:
          "The good companion fishbar in the middle of Amsterdam’s Jordaan quarter focuses on sustainable fish and local products. Besides the specialty Fish & Chips, they serve daily changing fish dishes, mussels, oysters and smaller sharable sea goodness.",
        photo:
          "https://res.cloudinary.com/nena/image/upload/c_scale,h_641,q_100/v1574684201/ProjectTwo-EleniAndMaria/Copenhagen/Amsterdam/The_Good_Companion_jk3bhw.png",
        website:
          "https://www.tripadvisor.com/Restaurant_Review-g188590-d12526899-Reviews-The_Good_Companion-Amsterdam_North_Holland_Province.html"
      },
      {
        day: 2,
        name: "Canal Cruise",
        description:
          "Elegant canal houses, intricately designed churches and impressive bridges, plus a smooth ride on a comfy boat, all make for an Amster-damn good trip along the city's famed canals.",
        photo:
          "https://res.cloudinary.com/nena/image/upload/c_scale,h_641,q_100/v1574684208/ProjectTwo-EleniAndMaria/Copenhagen/Amsterdam/Canal_Cruise_ovh5bk.png",
        website:
          "https://www.tiqets.com/en/amsterdam-c75061/canal-cruise-amsterdam-skip-the-line-p974472"
      },
      {
        day: 2,
        name: "Brasserie Ambassade",
        description:
          "Brasserie Ambassade has a well-established reputation for its delicious dishes, customer focus and high standards of service. ",
        photo:
          "https://res.cloudinary.com/nena/image/upload/c_scale,h_641,q_100/v1574684202/ProjectTwo-EleniAndMaria/Copenhagen/Amsterdam/Brasserie_Ambassade_snzz3l.png",
        website:
          "https://www.tripadvisor.com/Restaurant_Review-g188590-d8567150-Reviews-Brasserie_Ambassade-Amsterdam_North_Holland_Province.html"
      },
      {
        day: 2,
        name: "Muziekgebouw aan 't IJ ",
        description:
          "This concert hall is one of Amsterdam's most striking buildings and offers a programme of innovative and inspirational performances from leading orchestras, singers and other musicians. Afterwards, watch the lights from Noord twinkling across the water.",
        photo:
          "https://res.cloudinary.com/nena/image/upload/c_scale,h_641,q_100/v1574684210/ProjectTwo-EleniAndMaria/Copenhagen/Amsterdam/muziekgebouw_aan_t_ij_fh2i65.png",
        website: "https://www.muziekgebouw.nl/"
      }
    ]
  }
];

mongoose
  .connect(URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => {
    return Poi.create(cities);
  })
  .then(() => mongoose.connection.close())
  .catch(err => {
    console.error("Error connecting to mongo", err);
  });

module.exports = cities;
