import EventCard from "./EventCard";

function Main(props) {
    return (
        <main id="primary-main">
            <h2 id="primary-main-heading">Events happening soon:</h2>
            <section id="event-card-section">
                <EventCard
                    id="focused-card"
                    title="Community Picnic"
                    imgUrl="https://placekitten.com/500/300"
                    imgAlt="pretty kitty"
                    description="
                        Join us for a joyous celebration of unity and diversity at our annual Community Picnic in Central Park! This year, we are commemorating the rich tapestry of cultures, 
                        traditions, and stories that make our community vibrant and unique. As we gather beneath the sprawling oak trees and lush greenery of Central Park, we invite neighbors 
                        of all backgrounds to come together in fellowship and camaraderie. It's a time to bridge divides, forge new friendships, and strengthen the bonds that unite us as one 
                        community. Our picnic promises a day of delightful festivities for all ages. Spread your picnic blankets on the sun-kissed grass and indulge in a delectable feast of 
                        homemade dishes lovingly prepared by members of our diverse community. From savory delicacies to mouthwatering desserts, there's a culinary delight to tantalize every 
                        taste bud.
                    "
                    date="Friday, March 1st"
                    location="Downtown Park"
                />
                <EventCard
                    title="Winter Concert Series"
                    imgUrl="https://placekitten.com/500/300"
                    imgAlt="pretty kitty"
                    description="Enjoy live music under the stars with our summer concert series! Bring your blankets and chairs and groove to the tunes of local bands every Friday night."
                    date="Saturday, March 2nd"
                    location="Town Square Amphitheater"
                />
                <EventCard
                    title="Family Fun Day"
                    imgUrl="https://placekitten.com/500/300"
                    imgAlt="pretty kitty"
                    description="Bring the whole family for a day of fun activities! From carnival games to face painting and crafts, there's something for everyone to enjoy."
                    date="Saturday, March 2nd"
                    location="Community Center"
                />
                <EventCard
                    title="Community Cleanup"
                    imgUrl="https://placekitten.com/500/300"
                    imgAlt="pretty kitty"
                    description="Help keep our community beautiful by joining us for a neighborhood cleanup. Let's work together to pick up litter and beautify our streets."
                    date="Monday, March 4th"
                    location="Downtown Streets"
                />
                <EventCard
                    title="Movie Night in the Park"
                    imgUrl="https://placekitten.com/500/300"
                    imgAlt="pretty kitty"
                    description="Grab your popcorn and blankets for an outdoor movie night! We'll be screening family-friendly films under the stars. Don't forget to bring your lawn chairs!"
                    date="Wednesday, March 6th"
                    location="Riverside"
                />
                <EventCard
                    title="Health and Wellness Fair"
                    imgUrl="https://placekitten.com/500/300"
                    imgAlt="pretty kitty"
                    description=" Take charge of your health at our quarterly health and wellness fair. Explore booths on fitness, nutrition, mental health, and more. Free health screenings will also be available."
                    date="Sunday, March 10th"
                    location="Community Center Gymnasium"
                />
                <EventCard
                    title="Local Farmer's Market"
                    imgUrl="https://placekitten.com/500/300"
                    imgAlt="pretty kitty"
                    description=" Support local farmers and artisans at our weekly farmer's market. Browse fresh produce, handmade goods, and delicious treats while enjoying live music."
                    date="Sunday, March 10th"
                    location="Main Street"
                />
                <EventCard
                    title="Book Swap and Coffee"
                    imgUrl="https://placekitten.com/500/300"
                    imgAlt="pretty kitty"
                    description="Bring a book, take a book! Join us for a book swap event at the library. Enjoy complimentary coffee and refreshments while exploring new reads."
                    date="Tuesday, March 12th"
                    location="Public Library"
                />
                <EventCard
                    title="Community Potluck Dinner"
                    imgUrl="https://placekitten.com/500/300"
                    imgAlt="pretty kitty"
                    description="Share your favorite dishes with friends and neighbors at our community potluck dinner. From appetizers to desserts, let's feast together!"
                    date="Thursday, March 14th"
                    location="Community Center"
                />
                <EventCard
                    title="Pet Adoption Day"
                    imgUrl="https://placekitten.com/500/300"
                    imgAlt="pretty kitty"
                    description="Find your new furry friend at our pet adoption event. Meet adoptable pets looking for loving homes and learn about responsible pet ownership."
                    date="Wednesday, March 20th"
                    location="Animal Shelter"
                />
                <EventCard
                    title="Art in the Park"
                    imgUrl="https://placekitten.com/500/300"
                    imgAlt="pretty kitty"
                    description="Discover local talent at our outdoor art exhibition. Stroll through the park and admire paintings, sculptures, and crafts created by community artists."
                    date="Monday, March 25th"
                    location="Public Library"
                />
                <EventCard
                    title="Youth Sports Camp"
                    imgUrl="https://placekitten.com/500/300"
                    imgAlt="pretty kitty"
                    description="Keep kids active and engaged with our youth sports camp. Participants will learn new skills and teamwork through a variety of sports and games."
                    date="Saturday, March 30th"
                    location="Community Sports Complex"
                />
                <EventCard
                    title="Gardening Workshop"
                    imgUrl="https://placekitten.com/500/300"
                    imgAlt="pretty kitty"
                    description=" Learn the basics of gardening and sustainable practices at our hands-on workshop. Get tips on planting, composting, and maintaining a thriving garden."
                    date="Friday, April 5th"
                    location="Community Garden"
                />
                <EventCard
                    title="Cultural Diversity Festival"
                    imgUrl="https://placekitten.com/500/300"
                    imgAlt="pretty kitty"
                    description="Celebrate our community's rich cultural heritage with food, music, and performances from around the world. Experience the diversity that makes our community special."
                    date="Friday, April 5th"
                    location="Public Library"
                />
            </section>
        </main>
    );
}

export default Main;