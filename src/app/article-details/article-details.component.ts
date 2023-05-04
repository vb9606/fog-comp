import { Component } from '@angular/core';
import { Article } from '../interfaces/article';

@Component({
  selector: 'app-article-details',
  templateUrl: './article-details.component.html',
  styleUrls: ['./article-details.component.css']
})



export class ArticleDetailsComponent {
    articles: Article[] = [
        {
          title: 'The Thrill of Victory: The Best Moments in Sports History',
          category: 'Sports',
          rating: 4.7,
          imageUrl: 'https://images.unsplash.com/photo-1495467033333-15a8100e9da9?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzB8fHNwb3J0c3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80',
          summary: "From Jesse Owens' four gold medals at the 1936 Olympics to Michael Phelps' eight gold medals in Beijing, sports history is filled with incredible moments that have inspired us all. Here, we take a look at some of the greatest moments in sports history and the athletes who made them happen."
        },
        {
          title: 'The Psychology of Winning: How Champions Think and Behave',
          category: 'Sports',
          rating: 4.2,
          imageUrl: 'https://images.unsplash.com/photo-1519681393784-d120267933ba?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8c3BvcnRzJTIwY2hhaW5lcnxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80',
          summary: "What makes a champion? Is it natural talent, hard work, or something else entirely? In this article, we explore the psychology of winning and what it takes to be a true champion."
        },
        {
          title: 'Sports and Technology: The Future of Athletics',
          category: 'Sports',
          rating: 4.9,
          imageUrl: 'https://images.unsplash.com/photo-1525056358054-b4d3c3fe3f8b?ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8c3BvcnRzJTIwY2hhaW5lcnxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80',
          summary: "From high-tech training equipment to virtual reality simulations, technology is changing the way athletes train and compete. In this article, we take a look at some of the latest advancements in sports technology and what they mean for the future of athletics."
        },
        {
          title: 'The Benefits of Playing Sports: Why Everyone Should Get in the Game',
          category: 'Sports',
          rating: 4.6,
          imageUrl: 'https://images.unsplash.com/photo-1532375810705-75d3847f46e8?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8c3BvcnRzJTIwY2hhaW5lcnxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80',
          summary: "Playing sports isn't just about winning or losing. It's also about improving your health, building relationships, and developing important life skills. In this article, we explore the many benefits of playing sports and why everyone should get in the game."
        },
        {
          title: "The Rise of Esports",
          category: "Sports",
          rating: 4.3,
          imageUrl: "https://images.unsplash.com/photo-1510511459019-5dda7724fd2e?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8ZXNwb3J0c3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
          summary: "Esports have been on the rise in recent years, with millions of people tuning in to watch tournaments and competitions. Professional gamers are now being treated like traditional athletes, with sponsorships and lucrative contracts. As technology continues to advance, it's likely that esports will only become more popular and mainstream."
        },
        {
          title: 'The Future of Quantum Computing',
          category: 'Technology',
          rating: 4.5,
          imageUrl: 'https://cdn.pixabay.com/photo/2016/11/19/18/10/computer-1845752_960_720.jpg',
          summary: 'Quantum computing is one of the most exciting areas of research in technology today. With the potential to solve problems that classical computers simply can\'t handle, it could revolutionize the way we approach everything from drug discovery to weather forecasting.'
        },
        {
          title: 'Artificial Intelligence and Ethics',
          category: 'Technology',
          rating: 4,
          imageUrl: 'https://cdn.pixabay.com/photo/2018/03/10/14/25/brain-3219798_960_720.jpg',
          summary: 'As artificial intelligence becomes more powerful, questions are being raised about its impact on society. From biased algorithms to autonomous weapons, it\'s essential that we consider the ethical implications of these technologies.'
        },
        {
          title: 'The Rise of 5G Networks',
          category: 'Technology',
          rating: 4.5,
          imageUrl: 'https://cdn.pixabay.com/photo/2016/11/18/17/20/artificial-intelligence-1839549_960_720.jpg',
          summary: '5G networks promise to revolutionize the way we use mobile devices. With faster speeds and lower latency, they could enable everything from remote surgery to autonomous vehicles.'
        },
        {
          title: 'The Role of Blockchain in Cybersecurity',
          category: 'Technology',
          rating: 4,
          imageUrl: 'https://cdn.pixabay.com/photo/2018/03/06/22/22/blockchain-3205849_960_720.jpg',
          summary: 'Blockchain technology is known primarily for its role in cryptocurrency, but it has the potential to revolutionize cybersecurity as well. By providing a secure and decentralized way to store and share information, it could help protect against data breaches and cyber attacks.'
        },
        {
          title: 'The Internet of Things and the Smart Home',
          category: 'Technology',
          rating: 3.5,
          imageUrl: 'https://cdn.pixabay.com/photo/2017/08/06/09/53/people-2592385_960_720.jpg',
          summary: 'The internet of things (IoT) is connecting everything from appliances to cars to the internet, and the smart home is one of the most exciting areas of development. With devices like smart thermostats and voice assistants, we\'re on the cusp of a new era of home automation.'
        },
        {
          title: 'Tyrannosaurus Rex: The King of the Dinosaurs',
          category: 'Dinosaurs',
          rating: 4.5,
          imageUrl: 'https://images.unsplash.com/photo-1547036967-f280d5932a8a',
          summary: 'Tyrannosaurus Rex, or T. Rex for short, is one of the most famous dinosaurs of all time. With its massive size, sharp teeth, and powerful jaws, it was the king of the dinosaurs. T. Rex lived during the late Cretaceous period, about 68 to 66 million years ago, and was one of the last dinosaurs to go extinct.'
        },
        {
          title: 'Stegosaurus: The Spiked Dinosaur',
          category: 'Dinosaurs',
          rating: 3.2,
          imageUrl: 'https://images.unsplash.com/photo-1603172105176-38e8d03dc6b3',
          summary: 'Stegosaurus was a large, plant-eating dinosaur that lived during the late Jurassic period, about 155 to 150 million years ago. It was known for its distinctive rows of bony plates along its back, and for the spikes on its tail. Stegosaurus was also one of the first dinosaurs to be discovered and studied by scientists.'
        },
        {
          title: 'Velociraptor: The Speedy Predator',
          category: 'Dinosaurs',
          rating: 4.8,
          imageUrl: 'https://images.unsplash.com/photo-1518535256092-52e1b19055a2',
          summary: 'Velociraptor was a small, fast, and agile predator that lived during the late Cretaceous period, about 75 to 71 million years ago. It had sharp claws on its feet and hands, and was known for hunting in packs. Velociraptor was also one of the dinosaurs featured in the Jurassic Park movies.'
        },
        {
          title: 'Triceratops: The Three-Horned Dinosaur',
          category: 'Dinosaurs',
          rating: 3.9,
          imageUrl: 'https://images.unsplash.com/photo-1527470516329-a6ca1f8ed1b7',
          summary: 'Triceratops was a large, herbivorous dinosaur that lived during the late Cretaceous period, about 68 to 66 million years ago. It was known for its distinctive three-horned skull and bony frill. Triceratops was also one of the last dinosaurs to go extinct.'
        },
        {
          title: 'Brachiosaurus: The Giant Herbivore',
          category: 'Dinosaurs',
          rating: 4.2,
          imageUrl: 'https://images.unsplash.com/photo-1529568220523-9c3a3f3206e1',
          summary: 'Brachiosaurus was a massive, long-necked dinosaur that lived during the late Jurassic period, about 154 to 153 million years ago. It was one of the largest dinosaurs of all time, reaching lengths of up to 85 feet and heights of up to 40 feet. Brachiosaurus was also one of the dinosaurs featured in the movie Jurassic Park.'
        },
        {
          title: 'The Evolution of Pikachu: From Pichu to Raichu',
          category: 'Pokemon',
          rating: 4.5,
          imageUrl: 'https://cdn.bulbagarden.net/upload/0/0d/025Pikachu.png',
          summary: "Pikachu is one of the most iconic Pokemon in the franchise. In this article, we'll take a look at its evolution, from its cute pre-evolution Pichu to its powerful evolved form, Raichu."
        },
        {
          title: '10 Most Powerful Legendary Pokemon',
          category: 'Pokemon',
          rating: 4.2,
          imageUrl: 'https://cdn.bulbagarden.net/upload/thumb/4/4a/151Mew.png/250px-151Mew.png',
          summary: "Legendary Pokemon are some of the most powerful creatures in the Pokemon universe. In this article, we'll count down the top 10 most powerful legendary Pokemon, from Mewtwo to Arceus."
        },
        {
          title: 'The History of Pokemon Trading Cards',
          category: 'Pokemon',
          rating: 4.7,
          imageUrl: 'https://cdn.bulbagarden.net/upload/thumb/9/95/Pokemon_TCG_logo.png/200px-Pokemon_TCG_logo.png',
          summary: "The Pokemon Trading Card Game has been a beloved pastime for fans of the franchise since its introduction in the 90s. In this article, we'll take a look at the history of the game, from its early beginnings to its modern-day popularity."
        },
        {
          title: 'How to Build a Competitive Pokemon Team',
          category: 'Pokemon',
          rating: 4.0,
          imageUrl: 'https://cdn.bulbagarden.net/upload/thumb/3/36/Pok%C3%A9mon_Battle_Logo.png/200px-Pok%C3%A9mon_Battle_Logo.png',
          summary: "Building a competitive Pokemon team can be a daunting task, but with the right strategies and Pokemon, anyone can do it. In this article, we'll give you tips and tricks for building a winning team in battles."
        },
        {
          title: 'The Top 5 Cutest Pokemon of All Time',
          category: 'Pokemon',
          rating: 4.8,
          imageUrl: 'https://cdn.bulbagarden.net/upload/thumb/3/3f/025Pikachu_OS_anime_2.png/220px-025Pikachu_OS_anime_2.png',
          summary: "Pokemon come in all shapes and sizes, but some are just too cute to resist. In this article, we'll take a look at the top 5 cutest Pokemon of all time, from Pikachu to Eevee."
        },
        {
          title: 'The Majestic Redwood Trees',
          category: 'Nature',
          rating: 4.5,
          imageUrl: 'https://www.nps.gov/articles/images/Redwoods-101-Trees-Size-and-Shape-in-the-Redwood-Forest-Photo-1024px.jpg?maxwidth=1200&maxheight=1200&autorotate=false',
          summary: 'The redwood trees are some of the most impressive and awe-inspiring sights in nature. These trees can grow up to 350 feet tall and have a lifespan of over 2,000 years. In addition to their impressive size and longevity, redwoods are also home to a wide variety of wildlife and provide important ecosystem services.'
        },
        {
          title: 'The Stunning Northern Lights',
          category: 'Nature',
          rating: 4.8,
          imageUrl: 'https://www.northernlightsiceland.com/wp-content/uploads/2019/10/The-Northern-Lights-Iceland.jpg',
          summary: 'The Northern Lights, or Aurora Borealis, are one of the most incredible natural phenomena in the world. These lights are caused by particles from the sun colliding with the Earth’s atmosphere and are only visible in certain parts of the world. Watching the Northern Lights dance across the sky is a truly breathtaking experience.'
        },
        {
          title: 'The Incredible Migration of Monarch Butterflies',
          category: 'Nature',
          rating: 4.2,
          imageUrl: 'https://www.nps.gov/articles/images/Monarch-Migration-Cover-Image-1024px.jpg?maxwidth=1200&maxheight=1200&autorotate=false',
          summary: 'Every year, millions of Monarch butterflies migrate from Canada and the United States to Mexico, covering thousands of miles. This incredible migration is one of the most impressive feats in the animal kingdom and is essential to the survival of the species. Monarch butterflies are also an important part of many ecosystems and serve as pollinators for a wide variety of plants.'
        },
        {
          title: 'The Beauty of Coral Reefs',
          category: 'Nature',
          rating: 4.6,
          imageUrl: 'https://www.nps.gov/common/uploads/grid_builder/pwr/crop16_9/B5E9A5FE-1DD8-B71B-0B842D7FA4CC4FE2.jpg?width=3072&height=1728&mode=crop&quality=90',
          summary: 'Coral reefs are some of the most diverse and beautiful ecosystems in the world. These underwater structures are home to a wide variety of marine life, including fish, sharks, and sea turtles. Unfortunately, coral reefs are also under threat from climate change and other human activities, making it more important than ever to protect these fragile ecosystems.'
        },
        {
          title: 'The Serenity of Waterfalls',
          category: 'Nature',
          rating: 4.3,
          imageUrl: 'https://www.nps.gov/articles/images/Serenity-of-Waterfalls-Cover-Image-1024px.jpg?maxwidth=1200&maxheight=1200&autorotate=false',
          summary: 'Waterfalls are some of the most peaceful and serene places in nature. The sound of the water cascading down the rocks and the mist rising from the pool below create a calming atmosphere that can be difficult to find in our fast-paced world. Waterfalls are also important sources of freshwater and can provide important habitat for a wide variety of wildlife.'
        },
        {
          title: 'The Wonders of the Universe',
          category: 'Universe',
          rating: 4.5,
          imageUrl: 'https://www.nasa.gov/sites/default/files/styles/full_width_feature/public/thumbnails/image/38624091354_7a81f8bb87_k.jpg',
          summary: 'The universe is full of wonders that have fascinated humans for centuries. From the mysteries of black holes to the breathtaking beauty of distant galaxies, there is always something new and exciting to discover in the cosmos.'
          },
          {
          title: 'The Origins of the Universe',
          category: 'Universe',
          rating: 4.0,
          imageUrl: 'https://www.sciencemag.org/sites/default/files/styles/article_main_large/public/ca-0713-nasa-01.jpg?itok=6UWV7Eli',
          summary: 'The question of how the universe began is one of the biggest mysteries of science. From the Big Bang to the formation of galaxies and stars, scientists are piecing together the history of the cosmos and our place in it.'
          },
          {
          title: 'Life Beyond Earth',
          category: 'Universe',
          rating: 4.2,
          imageUrl: 'https://www.jpl.nasa.gov/images/solarsystem/PIA23623-16.jpg',
          summary: 'The search for life beyond Earth has captivated the public imagination for decades. With the discovery of thousands of exoplanets, scientists are getting closer to finding evidence of life in the universe.'
          },
          {
          title: 'Exploring the Cosmos',
          category: 'Universe',
          rating: 4.5,
          imageUrl: 'https://www.jpl.nasa.gov/images/galaxy/20181017/pia22892-16.jpg',
          summary: 'From telescopes to space probes, humans have developed an impressive array of tools to explore the universe. With each new discovery, we learn more about the mysteries of the cosmos and our place in it.'
          },
          {
          title: 'The Future of Space Exploration',
          category: 'Universe',
          rating: 4.3,
          imageUrl: 'https://www.nasa.gov/sites/default/files/styles/full_width_feature/public/thumbnails/image/hubble_friday_090321.png',
          summary: 'The exploration of space is entering a new era, with plans for missions to the Moon, Mars, and beyond. As we push the boundaries of what is possible, we are opening up new frontiers of knowledge and expanding the horizons of human experience.'
          },
          {
            title: 'Fascinating Facts About Anglerfish',
            category: 'Fish',
            rating: 4.5,
            imageUrl: 'https://www.nationalgeographic.com/content/dam/animals/pictures/fish/group/anglerfish/anglerfish-group.jpg',
            summary: 'Anglerfish are some of the most fascinating fish in the ocean. With their large mouths, bioluminescent lures, and ability to swallow prey much larger than themselves, these fish have captured the imaginations of scientists and the public alike.'
          },
          {
            title: 'The Colorful World of Coral Reef Fish',
            category: 'Fish',
            rating: 4.2,
            imageUrl: 'https://cdn.britannica.com/21/118821-050-028C95EE/underwater-photography-Coral-reef-fishes-Sulawesi-Indonesia.jpg',
            summary: 'Coral reef fish are known for their bright colors and unique patterns. These fish not only add to the beauty of coral reefs but also play important roles in maintaining the health of these fragile ecosystems.'
          },
          {
            title: 'The Mysterious Lives of Deep-Sea Fish',
            category: 'Fish',
            rating: 4.7,
            imageUrl: 'https://www.oceanographicmagazine.com/wp-content/uploads/2020/04/Deep-Sea-Fish.jpg',
            summary: 'The deep sea is one of the most mysterious places on Earth, and the fish that live there are equally fascinating. From the bioluminescent lanternfish to the giant squid, these creatures have adapted to survive in a world without light and under extreme pressure.'
          },
          {
            title: 'The Importance of Salmon in the Ecosystem',
            category: 'Fish',
            rating: 4.4,
            imageUrl: 'https://www.nationalgeographic.com/content/dam/animals/pictures/fish/s/salmon/salmon.jpg',
            summary: 'Salmon are a keystone species in many ecosystems around the world. Their annual migrations from freshwater to the ocean and back again bring important nutrients to both terrestrial and aquatic ecosystems, and they provide a critical food source for many animals.'
          },
          {
            title: 'The Amazing Adaptations of Electric Fish',
            category: 'Fish',
            rating: 4.9,
            imageUrl: 'https://www.sciencenewsforstudents.org/wp-content/uploads/2021/05/1030_ElectricFish.jpg',
            summary: 'Electric fish are some of the most unique creatures on the planet. With the ability to generate and sense electric fields, these fish have adapted to life in low-light or murky environments and use their electric sense to navigate, communicate, and hunt for prey.'
          }

    ];

    recommendedArticles: Article[];
    popularArticles: Article[];

    currentArticle: any = this.articles[0];
    currentIndex = 0;

    nrOfStars : number = 5;

    constructor() {
      this.recommendedArticles = this.getRandomArticles(4);
      this.popularArticles = this.getRandomArticles(4);
    }

    ngOnInit() {
      setInterval(() => {
        this.currentIndex = (this.currentIndex + 1) % this.articles.length;
        this.currentArticle = this.articles[this.currentIndex];
      }, 10000);
    }

    getRandomArticles(numArticles: number): Article[] {
      const randomArticles: Article[] = [];
      while (randomArticles.length < numArticles) {
        const randomIndex = Math.floor(Math.random() * this.articles.length);
        const randomArticle = this.articles[randomIndex];
        if (!randomArticles.includes(randomArticle)) {
          randomArticles.push(randomArticle);
        }
      }
      return randomArticles;
    }
  }
