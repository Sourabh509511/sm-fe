import React from 'react';
import * as Styles from './styles';

const AboutUs = () => {
    return (
        <Styles.Wrapper className="d-flex flex-column" style={{ gap: '22px' }}>
            <div>
                Welcome to our grocery store! We are a one-stop-shop for all
                your grocery needs, specializing in spices, dry fruits, edible
                oils, and pulses. We pride ourselves on offering high-quality
                products at affordable prices.
            </div>
            <div>
                Our spices are carefully selected from the finest sources around
                the world to ensure you get the best flavor and aroma in your
                dishes. From whole spices to ground spices, we have a wide
                variety of options to choose from. Whether you're making a
                classic Indian curry or experimenting with a new recipe, we have
                the spices you need to take your cooking to the next level.
            </div>
            <div>
                Our selection of dry fruits is also top-notch, with a range of
                options including almonds, cashews, raisins, and more. These
                make for a healthy snack or a delicious addition to your baking
                or cooking. We also have a range of edible oils, including olive
                oil, coconut oil, and mustard oil, which are essential for
                cooking a variety of dishes.
            </div>
            <div>
                When it comes to pulses, we have an extensive range of options,
                including lentils, chickpeas, and beans. These are an excellent
                source of protein and fiber and are a staple in many cuisines
                around the world. We offer both organic and non-organic options
                to suit your preference.
            </div>
            <div>
                At our grocery store, we are committed to providing excellent
                customer service. Our knowledgeable staff is always on hand to
                answer any questions you may have and help you find the products
                you need. We also offer convenient delivery options to make
                shopping with us even more convenient.
            </div>
            <div>
                Thank you for choosing our grocery store for your shopping
                needs. We look forward to serving you and helping you create
                delicious and healthy meals at home.
            </div>
        </Styles.Wrapper>
    );
};

export default AboutUs;
