/**
 * Portfolio component
 *
 * Highlights some of  your creations. These can be designs, websites,
 * open source contributions, articles you've written and more.
 *
 * This is a great area for you to to continually add to and refine
 * as you continue to learn and create.
 */

import React from "react";

/**
 * Desk image
 *
 * Below is a sample desk image. Feel free to update this to an image of your choice,
 * updating below imageAltText to string that represents what you see in that image.
 *
 * Need an image? Check out https://unsplash.com to download a photo you
 * freely use on your site.
 */
import image from "../images/cloudy4.jpg";

const imageAltText = "Cloud Image";

/**
 * Project list
 *
 * An array of objects that will be used to display for your project
 * links section. Below is a sample, update to reflect links you'd like to highlight.
 */
const projectList = [
  {
    title: "Education Landing Page",
    description:
      "The Educational Landing Page project is a responsive website designed to showcase an educational platform or service. It features a modern and clean layout with sections highlighting course offerings, features, testimonials, and a contact form. The page is visually appealing with smooth transitions and user-friendly navigation, making it ideal for promoting educational content or institutions.",
    url: "https://simar012.github.io/Educational-landing-page/",
  },
  {
    title: "Electronic E-commerce website",
    description:
      "The Electronic E-commerce project is a responsive website built for an online electronics store. It offers a sleek and modern design with sections for featured products, categories, customer testimonials, and promotional banners. The site includes easy navigation, product displays, and an integrated shopping cart for a smooth user experience.",
    url: "https://simar012.github.io/Electronic-E-commerce/",
  },
  {
    title: "Shopping-Website",
    description:
      "The Shopping Website project is a responsive e-commerce platform designed to provide a seamless shopping experience. It features a clean, user-friendly layout with sections showcasing product categories, featured items, and special offers. The website includes smooth navigation, product details, and a shopping cart functionality that allows users to easily add and manage items.",
    url: "https://simar012.github.io/Shopping-Website/",
  },
  {
    title: "Training cum internship",
    description:
      "I have done a training cum internship from yhills. It was of 2 months, mainly focusing on technologies that are used in front end development.",
    url: "https://drive.google.com/drive/folders/1QJiNqOUrf9HU6tT60pLNgD01Vn-sVrN5",
  },
];

const Portfolio = () => {
  return (
    <section className="padding" id="portfolio">
      <h2 style={{ textAlign: "center" }}>Portfolio</h2>
      <div style={{ display: "flex", flexDirection: "row", paddingTop: "3rem" }}>
        <div style={{ maxWidth: "40%", alignSelf: "center" }}>
          <img
            src={image}
            style={{ height: "90%", width: "100%", objectFit: "cover" }}
            alt={imageAltText}
          />
        </div>
        <div className="container">
          {projectList.map((project) => (
            <div className="box" key={project.title}>
              <a href={project.url} target="_blank" rel="noopener noreferrer">
                <h3 style={{ flexBasis: "40px" }}>{project.title}</h3>
              </a>
              <p className="small">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
