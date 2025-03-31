import React from 'react';
import blogs from '../../data/blogs.json';
import styles from './Blogs.module.css';

// Use relative paths for images
import ZKImage from "../../assets/blogs/ZK-Image.png";
import SEIImage from "../../assets/blogs/SEI-Image.png";
import VelasImage from "../../assets/blogs/Velas-Image.png";
import TokenomicsImage from "../../assets/blogs/Tokenomics-Image.png";
import LayersImage from "../../assets/blogs/Layers-Image.png";
import ReactImage from "../../assets/blogs/React.png";
import HTMLvsNodeImage from "../../assets/blogs/HTMLvsNode.png";

const blogImages = {
    "ZK-Image.png": ZKImage,
    "SEI-Image.png": SEIImage,
    "Velas-Image.png": VelasImage,
    "Tokenomics-Image.png": TokenomicsImage,
    "Layers-Image.png": LayersImage,
    "React.png": ReactImage,
    "HTMLvsNode.png": HTMLvsNodeImage,
};

export const Blogs = () => {
    return (
        <section id='blogs' className={styles.containers}>
            <h1 className={styles.header}>Blogs</h1>
            <div className={styles.blogs}>
                {blogs.map((blog, id) => {
                    // Dynamically get the correct image import based on the title or other unique identifiers
                    const blogImage = blogImages[`${blog.imageSrc}`];

                    return (
                        <div key={id} className={styles.container}>
                            <div className={styles.images}>
                                <img className={styles.image} src={blogImage} alt={`image of ${blog.title}`} />
                            </div>
                            <div className={styles.writeups}>
                                <h3 className={styles.title}>{blog.title}</h3>
                                <p className={styles.description}>{blog.description}</p>
                                {blog.dates && blog.dates.length > 0 && (
                                    <ul className={styles.dates}>
                                        {blog.dates.map((date, index) => (
                                            <li key={index}>{date}</li>
                                        ))}
                                    </ul>
                                )}
                                <div>
                                    <a className={styles.link} href={blog.link}>Read More</a>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
        </section>
    );
};
