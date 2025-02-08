import MomoImage from '../images/Momo.jpg';
import ChineseImage from '../images/chinese.webp';
import ItalianImage from '../images/italian.jpg';
import IndianImage from '../images/indian.png';
import MexicanImage from '../images/mexican.webp';
import JapaneseImage from '../images/japanese.webp';
import ThaiImage from '../images/thai.webp';
import FrenchImage from '../images/french.jpg';
import AmericanImage from '../images/american.jpg';
import MediterraneanImage from '../images/mediterranean.jpg';
import SpanishImage from '../images/SpanishImage.jpg';  
import GreekImage from '../images/greek.jpg';
import KoreanImage from '../images/korean.webp';
import LebaneseImage from '../images/lebanese.jpg';
import pita from '../images/pita.jpeg';
import lamb from '../images/lamb.jpg';
import olives from '../images/olives.jpg';
import fetacheese from '../images/fetacheese.jpg';



const categoryData = {
  momo: {
    name: "Momo",
    image: MomoImage,
    price: 500,
    ingredients: [
      { name: "Dough", quantity: "500g", price: 50, image: "https://cdn.jwplayer.com/v2/media/ezUNIZDk/poster.jpg?width=720" },
      { name: "Vegetables", quantity: "200g", price: 50, image: "https://www.foodandwine.com/thmb/QpxHuBw1ACzW_G9TBNhuOUdxnqI=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/the-best-way-to-store-vegetables-to-keep-them-fresh-as-long-as-possible-FT-BLOG0320-2-d92cc1b173504702ba0bf5cdaec82c8a.jpg" },
      { name: "Meat", quantity: "300g", price: 50, image: "https://cdn.britannica.com/72/143572-050-87DF1262/pork-butcher-shop-Hong-Kong.jpg" },
      { name: "Spices", quantity: "50g", price: 50, image: "https://cdn.britannica.com/26/82526-050-EBEB4A05/Spices-sale-stand-Istanbul-Egyptian-Bazaar.jpg" },
    ],
  },
  chinese: {
    name: "Chinese",
    image: ChineseImage,
    price: 500,
    ingredients: [
      { name: "Noodles", quantity: "300g", price: 50, image: "https://5.imimg.com/data5/ZY/TH/DG/SELLER-85963539/noodless-jpg-500x500.jpg" },
      { name: "Soy Sauce", quantity: "50ml", price: 50, image: "https://www.kikkoman.eu/fileadmin/_processed_/3/6/csm_Kikkoman_Quality_FeaturesofKikkomanSoySauce_02_NoArtificial_Desktop_2x_85f9477baa.webp" },
      { name: "Vegetables", quantity: "150g", price: 50, image: "https://www.foodandwine.com/thmb/QpxHuBw1ACzW_G9TBNhuOUdxnqI=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/the-best-way-to-store-vegetables-to-keep-them-fresh-as-long-as-possible-FT-BLOG0320-2-d92cc1b173504702ba0bf5cdaec82c8a.jpg" },
      { name: "Chicken", quantity: "200g", price: 50, image: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/57/Chickens_in_market.jpg/800px-Chickens_in_market.jpg" },
    ],
  },
  italian: {
    name: "Italian",
    image: ItalianImage,
    price: 500,
    ingredients: [
      { name: "Pasta", quantity: "300g", price: 50, image: "https://5.imimg.com/data5/SELLER/Default/2024/3/405903419/CO/XG/ZQ/191638221/pasta-500x500.jpg" },
      { name: "Tomato Sauce", quantity: "200g", price: 50, image: "https://api.americangarden.us/wp-content/uploads/2024/02/Tomato-500-x-380-pxl.jpg" },
      { name: "Cheese", quantity: "100g", price: 50, image: "https://images.unsplash.com/photo-1631379578550-7038263db699?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGNoZWVzZXxlbnwwfHwwfHx8MA%3D%3D" },
      { name: "Olive Oil", quantity: "50ml", price: 50, image: "https://cdn2.stylecraze.com/wp-content/uploads/2013/04/42-shutterstock_350179640.jpg.webp" },
    ],
  },
  indian: {
    name: "Indian",
    image: IndianImage,
    price: 500,
    ingredients: [
      { name: "Rice", quantity: "500g", price: 50, image: "https://thumbs.dreamstime.com/b/rice-ricel-heart-shaped-box-wooden-surface-32712577.jpg" },
      { name: "Lentils", quantity: "300g", price: 50, image: "https://cdn.britannica.com/14/157214-050-3A82D9CD/kinds-lentils.jpg" },
      { name: "Spices", quantity: "100g", price: 50, image: "https://cdn.britannica.com/26/82526-050-EBEB4A05/Spices-sale-stand-Istanbul-Egyptian-Bazaar.jpg" },
      { name: "Vegetables", quantity: "200g", price: 50, image: "https://www.foodandwine.com/thmb/QpxHuBw1ACzW_G9TBNhuOUdxnqI=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/the-best-way-to-store-vegetables-to-keep-them-fresh-as-long-as-possible-FT-BLOG0320-2-d92cc1b173504702ba0bf5cdaec82c8a.jpg" },
    ],
  },
  mexican: {
    name: "Mexican",
    image: MexicanImage,
    price: 500,
    ingredients: [
      { name: "Tortillas", quantity: "6 pieces", price: 50, image: "https://via.placeholder.com/100?text=Tortillas" },
      { name: "Beans", quantity: "200g", price: 50, image: "https://via.placeholder.com/100?text=Beans" },
      { name: "Salsa", quantity: "100g", price: 50, image: "https://via.placeholder.com/100?text=Salsa" },
      { name: "Cheese", quantity: "100g", price: 50, image: "https://via.placeholder.com/100?text=Cheese" },
    ],
  },
  japanese: {
    name: "Japanese",
    image: JapaneseImage,
    price: 500,
    ingredients: [
      { name: "Sushi Rice", quantity: "300g", price: 50, image: "https://via.placeholder.com/100?text=Sushi+Rice" },
      { name: "Seaweed", quantity: "6 sheets", price: 50, image: "https://via.placeholder.com/100?text=Seaweed" },
      { name: "Raw Fish", quantity: "200g", price: 50, image: "https://via.placeholder.com/100?text=Raw+Fish" },
      { name: "Soy Sauce", quantity: "50ml", price: 50, image: "https://via.placeholder.com/100?text=Soy+Sauce" },
    ],
  },
  thai: {
    name: "Thai",
    image: ThaiImage,
    price: 500,
    ingredients: [
      { name: "Rice Noodles", quantity: "300g", price: 50, image: "https://st.depositphotos.com/1767457/4455/i/450/depositphotos_44557515-Raw-rice-noodles.jpg" },
      { name: "Coconut Milk", quantity: "200ml", price: 50, image: "https://www.alphafoodie.com/wp-content/uploads/2023/11/Coconut-milk-square.jpeg" },
      { name: "Shrimp", quantity: "150g", price: 50, image: "https://images.unsplash.com/photo-1565680018434-b513d5e5fd47?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHNocmltcHxlbnwwfHwwfHx8MA%3D%3D" },
      { name: "Spices", quantity: "50g", price: 50, image: "https://img.freepik.com/free-photo/closeup-shot-colorful-asian-spices-market-with-blurry_181624-16223.jpg" },
    ],
  },
  french: {
    name: "French",
    image: FrenchImage,
    price: 500,
    ingredients: [
      { name: "Baguette", quantity: "1 loaf", price: 50, image: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/86/Baguettes%2C_Paris%2C_France_-_panoramio.jpg/800px-Baguettes%2C_Paris%2C_France_-_panoramio.jpg" },
      { name: "Butter", quantity: "100g", price: 50, image: "https://t3.ftcdn.net/jpg/02/10/30/54/360_F_210305493_vSBsVrBRyJvLBR5JLKmISAEy3xjfcERN.jpg" },
      { name: "Cheese", quantity: "150g", price: 50, image: "https://s7g10.scene7.com/is/image/tetrapak/cheddar-cheese-1?wid=600&hei=338&fmt=jpg&resMode=sharp2&qlt=85,0&op_usm=1.75,0.3,2,0" },
      { name: "Herbs", quantity: "50g", price: 50, image: "https://extension.umd.edu/sites/extension.umd.edu/files/styles/optimized/public/2021-01/herbs_cooking_pixabay-2523119_1280.jpg?itok=NuRgPpAB" },
    ],
  },
  american: {
    name: "American",
    image: AmericanImage,
    price: 500,
    ingredients: [
      { name: "Burger Buns", quantity: "4 pieces", price: 50, image: "https://via.placeholder.com/100?text=Burger+Buns" },
      { name: "Beef Patties", quantity: "4 pieces", price: 50, image: "https://via.placeholder.com/100?text=Beef+Patties" },
      { name: "Cheese", quantity: "100g", price: 50, image: "https://via.placeholder.com/100?text=Cheese" },
      { name: "Lettuce", quantity: "50g", price: 50, image: "https://via.placeholder.com/100?text=Lettuce" },
    ],
  },
  mediterranean: {
    name: "Mediterranean",
    image: MediterraneanImage,
    price: 500,
    ingredients: [
      { name: "Pita Bread", quantity: "4 pieces", price: 50, image: "https://via.placeholder.com/100?text=Pita+Bread" },
      { name: "Hummus", quantity: "200g", price: 50, image: "https://via.placeholder.com/100?text=Hummus" },
      { name: "Olives", quantity: "100g", price: 50, image: "https://via.placeholder.com/100?text=Olives" },
      { name: "Feta Cheese", quantity: "150g", price: 50, image: "https://via.placeholder.com/100?text=Feta+Cheese" },
    ],
  },
  spanish: {  
    name: "Spanish",
    image: SpanishImage,
    price: 500,
    ingredients: [
      { name: "Paella Rice", quantity: "300g", price: 50, image: "https://via.placeholder.com/100?text=Paella+Rice" },
      { name: "Seafood", quantity: "200g", price: 50, image: "https://via.placeholder.com/100?text=Seafood" },
      { name: "Saffron", quantity: "1g", price: 50, image: "https://via.placeholder.com/100?text=Saffron" },
      { name: "Olive Oil", quantity: "50ml", price: 50, image: "https://via.placeholder.com/100?text=Olive+Oil" },
    ],
  },
  greek: { 
    name: "Greek",
    image: GreekImage,
    price: 500,
    ingredients: [
      { name: "Pita Bread", quantity: "4 pieces", price: 50, image: pita },
      { name: "Feta Cheese", quantity: "150g", price: 50, image: fetacheese },
      { name: "Olives", quantity: "100g", price: 50, image: olives },
      { name: "Lamb", quantity: "200g", price: 50, image: lamb },
    ],
  },
  korean: { 
    name: "Korean",
    image: KoreanImage,
    price: 500,
    ingredients: [
      { name: "Rice", quantity: "300g", price: 50, image: "https://media.istockphoto.com/id/153737841/photo/rice.jpg?s=612x612&w=0&k=20&c=lfO7iLT0UsDDzra0uBOsN1rvr2d5OEtrG2uwbts33_c=" },
      { name: "Kimchi", quantity: "100g", price: 50, image: "https://i.ytimg.com/vi/eTucCw1w6Ak/maxresdefault.jpg" },
      { name: "Beef", quantity: "200g", price: 50, image: "https://via.placeholder.com/100?text=Beef" },
      { name: "Gochujang", quantity: "30g", price: 50, image: "https://storage.googleapis.com/gen-atmedia/3/2015/02/956d8eb779ad98918def05068c1a056537892d0f.jpeg" },
    ],
  },
  lebanese: {  
    name: "Lebanese",
    image: LebaneseImage,
    price: 500,
    ingredients: [
      { name: "Hummus", quantity: "200g", price: 50, image: "https://www.jocooks.com/wp-content/uploads/2021/07/hummus-1.jpg" },
      { name: "Pita Bread", quantity: "4 pieces", price: 50, image: "https://www.browneyedbaker.com/wp-content/uploads/2020/08/pita-bread-15-square.jpg" },
      { name: "Tahini", quantity: "50g", price: 50, image: "https://www.eatingwell.com/thmb/sofklLvmKh7O3SpHLVNAS7mKh-s=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/7688817-014244e5e7914fdc9d2e88170b7ae4ce.jpg" },
      { name: "Chicken", quantity: "200g", price: 50, image: "https://media.istockphoto.com/id/545343756/photo/chickens-on-traditional-free-range-poultry-farm.jpg?s=612x612&w=0&k=20&c=AXGb-A4jCpeTsoZEHQYTS43jHxMGkm-_yDVgx9J0uqc=" },
    ],
  },
};

export default categoryData;
