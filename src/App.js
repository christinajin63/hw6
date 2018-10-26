import React, { Component } from 'react';
import './App.css';
import IntroText from './components/Introtext/IntroText';
import Card from './components/Card/Card';
// import landmark from './images/base.jpg';
// import redRect from './images/redRect.png';
// import blueRect from './images/blueRect.png';

class App extends Component {

  state = {
      currentLocation: "shanghai",
      
      locations: {
              shanghai: {
                    selectted: true,
                    mainimg: '/images/pearltowerMain.png',
                    mainCity: "Shanghai",
                    mainLandmark: "Pearl Tower",
                    mainDes: "is a TV tower in Shanghai. Its location at the tip of Lujiazui in the Pudong New Area by the side of Huangpu River, opposite The Bund, makes it a distinct landmark in the area. Its principal designers were Jiang Huan Chen, Lin Benlin, and Zhang Xiulin. Construction began in 1991, and the tower was completed in 1994.",
                    mapImage: "/images/shanghaiMap.png",
                    foods: [
                              {
                                money: "$$$",
                                name: "Sushi Fuku",
                                description: "Chopped smoked salmon, half spicy tuna,  half spicy crab , avocado, cucumber, jalapenos, mango, with spicy mayo.all in a bowl, with white rice, brown rice, mixed greens, or red quinoa (+$.100)",
                                foodpic: "/images/sushi.jpg"
                                
                              },
                              {
                                money: "$$",
                                name: "Sushi Fuku",
                                description: "Chopped smoked salmon, half spicy tuna,  half spicy crab , avocado, cucumber, jalapenos, mango, with spicy mayo.all in a bowl, with white rice, brown rice, mixed greens, or red quinoa (+$.100)",
                                foodpic: "/images/sushi.jpg"
                              },
                              {
                                money: "$",
                                name: "Sushi Fuku",
                                description: "Chopped smoked salmon, half spicy tuna,  half spicy crab , avocado, cucumber, jalapenos, mango, with spicy mayo.all in a bowl, with white rice, brown rice, mixed greens, or red quinoa (+$.100)",
                                foodpic: "/images/sushi.jpg"
                              },
                              {
                                money: "$$$$$",
                                name: "Sushi Fuku",
                                description: "Chopped smoked salmon, half spicy tuna,  half spicy crab , avocado, cucumber, jalapenos, mango, with spicy mayo.all in a bowl, with white rice, brown rice, mixed greens, or red quinoa (+$.100)",
                                foodpic: "/images/sushi.jpg"
                              }
                            ] 
                      },
              malaysia: {
                selected: false,
                mainimg: '/images/twintowerMain.png',
                mainCity: "Malaysia",
                mainLandmark: "Petronas Twin Towers",
                mainDes: "The 88-storey twin toppers hold the title for 12th tallest skyscrapers in the world, and to date are the only twin towers to do so, making them number one in that category. The iconic Skybridge that links the two together acts as a tendon of sorts, keeping the sisters from swaying too much during high winds. ",
                mapImage: "/images/malaysiaMap.png",
                foods: [
                          {
                            money: "$$$",
                            name: "Sushi Fuku ",
                            description: "Chopped smoked salmon, half spicy tuna,  half spicy crab , avocado, cucumber, jalapenos, mango, with spicy mayo.all in a bowl, with white rice, brown rice, mixed greens, or red quinoa (+$.100)",
                            foodpic: "/images/sushi.jpg"
                            
                          },
                          {
                            money: "$$$",
                            name: "Sushi Fuku 1",
                            description: "Chopped smoked salmon, half spicy tuna,  half spicy crab , avocado, cucumber, jalapenos, mango, with spicy mayo.all in a bowl, with white rice, brown rice, mixed greens, or red quinoa (+$.100)",
                            foodpic: "/images/sushi.jpg"
                          },
                          {
                            money: "$$$",
                            name: "Sushi Fuku 2",
                            description: "Chopped smoked salmon, half spicy tuna,  half spicy crab , avocado, cucumber, jalapenos, mango, with spicy mayo.all in a bowl, with white rice, brown rice, mixed greens, or red quinoa (+$.100)",
                            foodpic: "/images/sushi.jpg"
                          },
                          {
                            money: "$$$",
                            name: "Sushi Fuku 3",
                            description: "Chopped smoked salmon, half spicy tuna,  half spicy crab , avocado, cucumber, jalapenos, mango, with spicy mayo.all in a bowl, with white rice, brown rice, mixed greens, or red quinoa (+$.100)",
                            foodpic: "/images/sushi.jpg"
                          }
                        ] 
                  },

                  italy: {
                    mainimg: '/images/leaningmain.png',
                    mainCity: "Italy",
                    mainLandmark: "Leaning Tower of Pisa",
                    mainDes: "The tower's tilt began during construction in the 12th century, caused by an inadequate foundation on ground too soft on one side to properly support the structure's weight. The tilt increased in the decades before the structure was completed in the 14th century. It gradually increased until the structure was stabilized (and the tilt partially corrected) by efforts in the late 20th and early 21st centuries.",
                    mapImage: "/images/italyMap.png",
                    foods: [
                              {
                                money: "$$$",
                                name: "Sushi Fuku italy",
                                description: "Chopped smoked salmon, half spicy tuna,  half spicy crab , avocado, cucumber, jalapenos, mango, with spicy mayo.all in a bowl, with white rice, brown rice, mixed greens, or red quinoa (+$.100)",
                                foodpic: "/images/sushi.jpg"
                                
                              },
                              {
                                money: "$$$",
                                name: "Sushi Fuku italy 2",
                                description: "Chopped smoked salmon, half spicy tuna,  half spicy crab , avocado, cucumber, jalapenos, mango, with spicy mayo.all in a bowl, with white rice, brown rice, mixed greens, or red quinoa (+$.100)",
                                foodpic: "/images/sushi.jpg"
                              },
                              {
                                money: "$$$",
                                name: "Sushi Fuku",
                                description: "Chopped smoked salmon, half spicy tuna,  half spicy crab , avocado, cucumber, jalapenos, mango, with spicy mayo.all in a bowl, with white rice, brown rice, mixed greens, or red quinoa (+$.100)",
                                foodpic: "/images/sushi.jpg"
                              },
                              {
                                money: "$$$",
                                name: "Sushi Fuku",
                                description: "Chopped smoked salmon, half spicy tuna,  half spicy crab , avocado, cucumber, jalapenos, mango, with spicy mayo.all in a bowl, with white rice, brown rice, mixed greens, or red quinoa (+$.100)",
                                foodpic: "/images/sushi.jpg"
                              }
                            ] 
                      },

                      ny: {
                        mainimg: '/images/empirestate.png',
                        mainCity: "New York",
                        mainLandmark: "Empire State Building",
                        mainDes: "The tower's tilt began during construction in the 12th century, caused by an inadequate foundation on ground too soft on one side to properly support the structure's weight. The tilt increased in the decades before the structure was completed in the 14th century. It gradually increased until the structure was stabilized (and the tilt partially corrected) by efforts in the late 20th and early 21st centuries.",
                        mapImage: "/images/nyMap.png",
                        foods: [
                                  {
                                    money: "$$$",
                                    name: "Sushi Fuku",
                                    description: "Chopped smoked salmon, half spicy tuna,  half spicy crab , avocado, cucumber, jalapenos, mango, with spicy mayo.all in a bowl, with white rice, brown rice, mixed greens, or red quinoa (+$.100)",
                                    foodpic: "/images/sushi.jpg"
                                    
                                  },
                                  {
                                    money: "$$$",
                                    name: "Sushi Fuku",
                                    description: "Chopped smoked salmon, half spicy tuna,  half spicy crab , avocado, cucumber, jalapenos, mango, with spicy mayo.all in a bowl, with white rice, brown rice, mixed greens, or red quinoa (+$.100)",
                                    foodpic: "/images/sushi.jpg"
                                  },
                                  {
                                    money: "$$$",
                                    name: "Sushi Fuku",
                                    description: "Chopped smoked salmon, half spicy tuna,  half spicy crab , avocado, cucumber, jalapenos, mango, with spicy mayo.all in a bowl, with white rice, brown rice, mixed greens, or red quinoa (+$.100)",
                                    foodpic: "/images/sushi.jpg"
                                  },
                                  {
                                    money: "$$$",
                                    name: "Sushi Fuku",
                                    description: "Chopped smoked salmon, half spicy tuna,  half spicy crab , avocado, cucumber, jalapenos, mango, with spicy mayo.all in a bowl, with white rice, brown rice, mixed greens, or red quinoa (+$.100)",
                                    foodpic: "/images/sushi.jpg"
                                  }
                                ] 
                          },

                      sf: {
                        mainimg: '/images/bridge.png',
                        mainCity: "San Francisco",
                        mainLandmark: "Bridge",
                        mainDes: "The tower's tilt began during construction in the 12th century, caused by an inadequate foundation on ground too soft on one side to properly support the structure's weight. The tilt increased in the decades before the structure was completed in the 14th century. It gradually increased until the structure was stabilized (and the tilt partially corrected) by efforts in the late 20th and early 21st centuries.",
                        mapImage: "/images/sfMap.png",
                        foods: [
                                  {
                                    money: "$$$",
                                    name: "Sushi Fuku",
                                    description: "Chopped smoked salmon, half spicy tuna,  half spicy crab , avocado, cucumber, jalapenos, mango, with spicy mayo.all in a bowl, with white rice, brown rice, mixed greens, or red quinoa (+$.100)",
                                    foodpic: "/images/sushi.jpg"
                                    
                                  },
                                  {
                                    money: "$$$",
                                    name: "Sushi Fuku",
                                    description: "Chopped smoked salmon, half spicy tuna,  half spicy crab , avocado, cucumber, jalapenos, mango, with spicy mayo.all in a bowl, with white rice, brown rice, mixed greens, or red quinoa (+$.100)",
                                    foodpic: "/images/sushi.jpg"
                                  },
                                  {
                                    money: "$$$",
                                    name: "Sushi Fuku",
                                    description: "Chopped smoked salmon, half spicy tuna,  half spicy crab , avocado, cucumber, jalapenos, mango, with spicy mayo.all in a bowl, with white rice, brown rice, mixed greens, or red quinoa (+$.100)",
                                    foodpic: "/images/sushi.jpg"
                                  },
                                  {
                                    money: "$$$",
                                    name: "Sushi Fuku",
                                    description: "Chopped smoked salmon, half spicy tuna,  half spicy crab , avocado, cucumber, jalapenos, mango, with spicy mayo.all in a bowl, with white rice, brown rice, mixed greens, or red quinoa (+$.100)",
                                    foodpic: "/images/sushi.jpg"
                                  }
                                ] 
                          },

      },
  }

  image1clickhandler = () => {
    this.setState({currentLocation: "italy"});
  }

  image2clickhandler = () => {
    this.setState({currentLocation: "malaysia"});
  }

  image3clickhandler = () => {
    this.setState({currentLocation: "shanghai"});
  }

  image4clickhandler = () => {
    this.setState({currentLocation: "ny"});
  }

  image5clickhandler = () => {
    this.setState({currentLocation: "sf"});
  }

  render() {

    var selected;
    var italy = <img ref="images" src={process.env.PUBLIC_URL + '/images/blueRect.png'} className="blueRect" id="one" alt={"unselected box"} onClick={this.image1clickhandler}/>
    var malaysia = <img ref="images" src={process.env.PUBLIC_URL + '/images/blueRect.png'} className="blueRect" id="two" alt={"unselected box"} onClick={this.image2clickhandler}/>
    var shanghai = <img ref="images" src={process.env.PUBLIC_URL + '/images/blueRect.png'} className="blueRect" id="three" alt={"unselected box"} onClick={this.image3clickhandler}/>
    var ny = <img ref="images" src={process.env.PUBLIC_URL + '/images/blueRect.png'} className="blueRect" id="four" alt={"unselected box"} onClick={this.image4clickhandler}/>
    var sf = <img ref="images" src={process.env.PUBLIC_URL + '/images/blueRect.png'} className="blueRect" id="five" alt={"unselected box"} onClick={this.image5clickhandler}/>
    if(this.state.currentLocation === "shanghai"){
      selected = this.state.locations.shanghai;
      shanghai = <img ref="images" src={process.env.PUBLIC_URL + '/images/redRect.png'} className="redRect" id="three" alt={"selected box"}/>
    }
    else if(this.state.currentLocation  === "malaysia"){
      selected = this.state.locations.malaysia;
      malaysia = <img ref="images" src={process.env.PUBLIC_URL + '/images/redRect.png'} className="redRect" id="two" alt={"unselected box"} />
    }
    else if(this.state.currentLocation  === "sf"){
      selected = this.state.locations.sf;
      sf = <img ref="images" src={process.env.PUBLIC_URL + '/images/redRect.png'} className="redRect" id="five" alt={"unselected box"} />
    }
    else if(this.state.currentLocation  === "ny"){
      selected = this.state.locations.ny;
      ny = <img ref="images" src={process.env.PUBLIC_URL + '/images/redRect.png'} className="redRect" id="four" alt={"unselected box"} />
    }
    else if(this.state.currentLocation === "italy"){
      selected = this.state.locations.italy;
      italy = <img ref="images" src={process.env.PUBLIC_URL + '/images/redRect.png'} className="redRect" id="one" alt={"unselected box"} />
    }

    return (
      <div className="App">
        <header className="App-header">
          <a href="app.js" className="logo">
            explore
          </a>
        </header>
        <body>
          <img ref="images" src={process.env.PUBLIC_URL + '/images/base.jpg'} className="bannerImg" alt={"banner image of landmarks"}/>
          {italy}
          {malaysia}
          {shanghai}
          {ny}
          {sf}
          <IntroText 
            picture={selected.mainimg}
            city={selected.mainCity}
            landmark={selected.mainLandmark}
            des={selected.mainDes}/>
          <img ref="images" width="1320px" src={process.env.PUBLIC_URL + selected.mapImage} className="map" alt={"map"}/>
          <h3>Highly Recommended Food around this area: </h3>
          <Card
            foodpic={selected.foods[0].foodpic}
            title={selected.foods[0].name} 
            money={selected.foods[0].money}
            description={selected.foods[0].description}/>
          <Card
            foodpic={selected.foods[1].foodpic}
            title={selected.foods[1].name} 
            money={selected.foods[1].money}
            description={selected.foods[1].description}/>
          <Card
            foodpic={selected.foods[2].foodpic}
            title={selected.foods[2].name} 
            money={selected.foods[2].money}
            description={selected.foods[2].description}/>
          <Card
            foodpic={selected.foods[3].foodpic}
            title={selected.foods[3].name} 
            money={selected.foods[3].money}
            description={selected.foods[3].description}/>
          
        </body>
      </div>
    );
  }
}

export default App;
