import SimpleReactFooter from "simple-react-footer";
import React from 'react';

function Footer() {
        const description = "We want to create a Netflix like-app that will send you movie recommendations via notifications. Through the use of AI and Machine Learning, our application will be able to suggest new movie titles similar to movies or genres that the user has previously liked or selected, thus allowing it to present the user with screen times at their local movie theater. In order to complete this project, our team will be using Agile methodology with Scrum framework, along with G-Suite, Zoom, and What’s App for communication.";
        const title = "Movieflix Idea";
        const columns = [
          {
              title: "About Us",
              resources: [
                  {
                      name: "Michael",
                      link: "/"
                  },
                  {
                      name: "Raghav ",
                      link: "/"
                  },
                  {
                      name: "Thomas",
                      link: "/"
                  },
                  {
                    name: "Jason",
                    link: "/"
                  },
                  {
                    name: "Nina",
                    link: "/"
                  },
                  {
                      name: "Rohit",
                      link: "/"
                  }
              ]
          },
          {
              title: "Languages Used",
              resources: [
                  {
                      name: "JavaScript frameworks",
                      link: "/"
                  },
                  {
                    name: "Node JS",
                    link: "/"
                  },
                  {
                      name: "Python",
                      link: "/terms"
                  }
              ]
          },
          {
              title: "Social Media",
              resources: [
                  {
                      name: "Michael",
                      link: "/"
                  },
                  {
                    name: "Jason",
                    link: "/"
                },
                {
                    name: "Raghav",
                    link: "/"
                },
                {
                    name: "Rohit ",
                    link: "/"
                },
                {
                    name: "Thomas",
                    link: "/"
                },
                  {
                      name: "Nina",
                      link: "/",
                  }
              ]
          }
       ];
      
       return (
       <SimpleReactFooter customName="footer"
          description={description} 
          title={title}
          columns={columns}
          linkedin="fluffy_cat_on_linkedin"
          facebook="rk_9599"
          twitter="rk_9599"
          instagram="mike_valenzuela_"
          youtube="UCFt6TSF464J8K82xeA?"
          pinterest="fluffy_cats_collections"
          copyright="I know you are reading this"
          iconColor="white"
          backgroundColor="rgba(0, 0, 0, 0.68)"
          fontColor="white"
          copyrightColor="white"
       />);
  
};

export default Footer;