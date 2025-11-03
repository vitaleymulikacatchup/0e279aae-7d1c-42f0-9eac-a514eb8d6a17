"use client";

import { ThemeProvider } from "@/providers/ThemeProvider";
import NavbarLayoutFloatingInline from '@/components/navbar/NavbarLayoutFloatingInline';
import HeroBillboard from '@/components/sections/hero/HeroBillboard';
import TextSplitAbout from '@/components/sections/about/TextSplitAbout';
import ProductCardOne from '@/components/sections/product/ProductCardOne';
import PricingCardThree from '@/components/sections/pricing/PricingCardThree';
import MetricCardOne from '@/components/sections/metrics/MetricCardOne';
import TestimonialCardOne from '@/components/sections/testimonial/TestimonialCardOne';
import FaqSplitText from '@/components/sections/faq/FaqSplitText';
import ContactSplit from '@/components/sections/contact/ContactSplit';
import FooterBase from '@/components/sections/footer/FooterBase';
import { Award, Calendar, ChefHat, MessageSquare, Sparkles, Star, TrendingUp, Users } from "lucide-react";

export default function Home() {
  return (
    <ThemeProvider
      defaultButtonVariant="shift-hover"
      defaultTextAnimation="entrance-slide"
      borderRadius="soft"
    >
      <div id="nav" data-section="nav">
        <NavbarLayoutFloatingInline
          navItems={[
            { name: "Menu", id: "product" },
            { name: "About", id: "about" },
            { name: "Pricing", id: "pricing" },
            { name: "Contact", id: "contact" }
          ]}
          brandName="Prime Cut Steakhouse"
          button={{
            text: "Order Now",
            href: "contact"
          }}
        />
      </div>

      <div id="hero" data-section="hero">
        <HeroBillboard
          title="Premium Steaks, Perfectly Grilled"
          description="Experience the finest cuts of beef, expertly prepared and served in an elegant atmosphere that defines luxury dining"
          tag="Prime Cut Steakhouse"
          tagIcon={Award}
          buttons={[
            { text: "View Our Menu", href: "product" },
            { text: "Reserve Table", href: "contact" }
          ]}
          imageSrc="https://images.pexels.com/photos/18015000/pexels-photo-18015000.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
          imageAlt="Premium grilled steak presentation"
        />
      </div>

      <div id="about" data-section="about">
        <TextSplitAbout
          title="Our Story"
          description={[
            "For over 30 years, Prime Cut Steakhouse has been serving the finest cuts of beef, sourced from premium ranches and aged to perfection.",
            "Our master chefs combine traditional grilling techniques with modern culinary innovation to create an unforgettable dining experience that keeps guests coming back for more."
          ]}
          buttons={[
            { text: "Learn More", href: "about" }
          ]}
        />
      </div>

      <div id="product" data-section="product">
        <ProductCardOne
          title="Our Signature Steaks"
          description="Hand-selected premium cuts, aged to perfection and grilled to your exact specifications"
          tag="Featured Menu"
          tagIcon={ChefHat}
          products={[
            {
              id: "1",
              name: "Prime Ribeye",
              price: "$65",
              imageSrc: "https://images.pexels.com/photos/5713763/pexels-photo-5713763.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Prime ribeye steak"
            },
            {
              id: "2",
              name: "Filet Mignon",
              price: "$78",
              imageSrc: "https://images.pexels.com/photos/12884547/pexels-photo-12884547.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Filet mignon steak"
            },
            {
              id: "3",
              name: "NY Strip",
              price: "$58",
              imageSrc: "https://images.pexels.com/photos/1639561/pexels-photo-1639561.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "New York strip steak"
            },
            {
              id: "4",
              name: "Tomahawk",
              price: "$125",
              imageSrc: "https://images.pexels.com/photos/29306152/pexels-photo-29306152.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Tomahawk steak"
            }
          ]}
        />
      </div>

      <div id="pricing" data-section="pricing">
        <PricingCardThree
          title="Dining Experiences"
          description="Choose the perfect dining experience for any occasion"
          tag="Pricing"
          tagIcon={Star}
          plans={[
            {
              id: "classic",
              price: "$89",
              name: "Classic Dinner",
              buttons: [
                { text: "Reserve Now", href: "contact" },
                { text: "View Menu", href: "product" }
              ],
              features: [
                "Choice of premium steak",
                "Two classic sides",
                "House salad",
                "Complimentary bread service"
              ]
            },
            {
              id: "premium",
              badge: "Most Popular",
              badgeIcon: Sparkles,
              price: "$149",
              name: "Premium Experience",
              buttons: [
                { text: "Reserve Now", href: "contact" },
                { text: "View Menu", href: "product" }
              ],
              features: [
                "Dry-aged steak selection",
                "Gourmet sides & appetizer",
                "Premium wine pairing",
                "Tableside Caesar salad",
                "Dessert course"
              ]
            },
            {
              id: "signature",
              price: "$225",
              name: "Signature Tasting",
              buttons: [
                { text: "Reserve Now", href: "contact" },
                { text: "View Menu", href: "product" }
              ],
              features: [
                "7-course tasting menu",
                "Wagyu and dry-aged selections",
                "Sommelier wine pairings",
                "Amuse-bouche & palate cleansers",
                "Private dining option",
                "Personal chef consultation"
              ]
            }
          ]}
        />
      </div>

      <div id="metric" data-section="metric">
        <MetricCardOne
          title="Excellence in Numbers"
          description="Three decades of serving exceptional steaks and creating memorable dining experiences"
          tag="Our Legacy"
          tagIcon={TrendingUp}
          metrics={[
            {
              id: "1",
              value: "30+",
              title: "years",
              description: "Serving premium steaks with passion and excellence",
              icon: Award
            },
            {
              id: "2",
              value: "50K+",
              title: "customers",
              description: "Satisfied guests who return for our exceptional service",
              icon: Users
            },
            {
              id: "3",
              value: "98%",
              title: "satisfaction",
              description: "Customer satisfaction rate from independent reviews",
              icon: Star
            }
          ]}
        />
      </div>

      <div id="testimonial" data-section="testimonial">
        <TestimonialCardOne
          title="What Our Guests Say"
          description="Hear from customers who've experienced our exceptional steaks and service"
          tag="Reviews"
          tagIcon={MessageSquare}
          testimonials={[
            {
              id: "1",
              name: "Michael Richardson",
              role: "Business Executive",
              company: "Corporate Dining",
              rating: 5,
              imageSrc: "https://images.pexels.com/photos/5716037/pexels-photo-5716037.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Portrait of Michael Richardson"
            },
            {
              id: "2",
              name: "Sarah Collins",
              role: "Food Enthusiast",
              company: "Luxury Dining",
              rating: 5,
              imageSrc: "https://images.pexels.com/photos/3801426/pexels-photo-3801426.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Portrait of Sarah Collins"
            },
            {
              id: "3",
              name: "Chef Antonio",
              role: "Culinary Expert",
              company: "Industry Professional",
              rating: 5,
              imageSrc: "https://images.pexels.com/photos/7552730/pexels-photo-7552730.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Portrait of Chef Antonio"
            },
            {
              id: "4",
              name: "David Martinez",
              role: "Regular Customer",
              company: "Anniversary Celebrations",
              rating: 5,
              imageSrc: "https://images.pexels.com/photos/3801426/pexels-photo-3801426.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Portrait of David Martinez"
            }
          ]}
        />
      </div>

      <div id="faq" data-section="faq">
        <FaqSplitText
          sideTitle="Frequently Asked Questions"
          sideDescription="Everything you need to know about dining with us"
          faqs={[
            {
              id: "1",
              title: "Do you take reservations?",
              content: "Yes, we highly recommend making reservations, especially for dinner service and weekends. You can book online or call us directly."
            },
            {
              id: "2",
              title: "What are your operating hours?",
              content: "We're open Tuesday through Sunday. Lunch: 11:30 AM - 2:30 PM, Dinner: 5:00 PM - 10:00 PM. Closed Mondays."
            },
            {
              id: "3",
              title: "Do you offer vegetarian options?",
              content: "While we specialize in steaks, we offer several vegetarian dishes including grilled vegetables, salads, and pasta options."
            },
            {
              id: "4",
              title: "Is there a dress code?",
              content: "We maintain a smart casual to business casual dress code. Jacket and tie are not required but always welcomed."
            },
            {
              id: "5",
              title: "Do you accommodate dietary restrictions?",
              content: "Absolutely. Please inform us of any allergies or dietary restrictions when making your reservation, and our chef will accommodate your needs."
            }
          ]}
        />
      </div>

      <div id="contact" data-section="contact">
        <ContactSplit
          tag="Reserve Your Table"
          tagIcon={Calendar}
          title="Experience Prime Cut Tonight"
          description="Make a reservation or sign up for our newsletter to receive exclusive offers and updates about special events and seasonal menu items."
          imageSrc="https://images.pexels.com/photos/34542767/pexels-photo-34542767.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
          imageAlt="Elegant steakhouse interior"
          inputPlaceholder="Enter your email for updates"
          buttonText="Make Reservation"
          termsText="By submitting, you agree to receive updates about reservations and special offers. Unsubscribe anytime."
        />
      </div>

      <div id="footer" data-section="footer">
        <FooterBase
          columns={[
            {
              title: "Menu",
              items: [
                { label: "Steaks", href: "product" },
                { label: "Appetizers", href: "product" },
                { label: "Wines", href: "product" },
                { label: "Desserts", href: "product" }
              ]
            },
            {
              title: "Restaurant",
              items: [
                { label: "About Us", href: "about" },
                { label: "Our Story", href: "about" },
                { label: "Chef Team", href: "about" },
                { label: "Reviews", href: "testimonial" }
              ]
            },
            {
              title: "Visit",
              items: [
                { label: "Reservations", href: "contact" },
                { label: "Contact", href: "contact" },
                { label: "Directions", href: "contact" },
                { label: "Private Events", href: "contact" }
              ]
            }
          ]}
          copyrightText="© 2025 Prime Cut Steakhouse. All rights reserved."
        />
      </div>
    </ThemeProvider>
  );
}