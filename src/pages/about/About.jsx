import { Helmet } from 'react-helmet-async';
import { FaGlobeAmericas, FaUsers, FaAward, FaCheckCircle } from 'react-icons/fa';

const TeamMember = ({ name, role, image }) => (
    <div className="flex flex-col items-center">
        <img src={image} alt={name} className="w-32 h-32 rounded-full mb-4 object-cover" />
        <h3 className="text-lg font-semibold">{name}</h3>
        <p className="text-gray-600 dark:text-white/70">{role}</p>
    </div>
);

const About = () => {
    const teamMembers = [
        {
            name: "Jane Doe",
            role: "Founder & CEO",
            image: "https://randomuser.me/api/portraits/women/11.jpg"
        },
        {
            name: "John Smith",
            role: "Head of Visa Services",
            image: "https://randomuser.me/api/portraits/men/11.jpg"
        },
        {
            name: "Emily Brown",
            role: "Customer Relations Manager",
            image: "https://randomuser.me/api/portraits/women/10.jpg"
        },
        {
            name: "Michael Lee",
            role: "Legal Advisor",
            image: "https://randomuser.me/api/portraits/men/10.jpg"
        }
    ];

    return (
        <>
            <Helmet>
                <title>About Us - Visa Navigator</title>
            </Helmet>
            <div className="w-11/12 sm:container mx-auto my-10 md:my-20 !mt-28">
                <section className="text-center max-w-4xl mx-auto space-y-4 my-5 lg:my-10 dark:text-white">
                    <h2 className="text-3xl font-bold">About Visa Navigator</h2>
                    <p className="text-lg">Guiding you through the complexities of international travel with expertise and care.
                    </p>
                </section>
                <section className="bg-white dark:bg-[#2a323c] py-16">
                    <div className="container mx-auto px-4">
                        <h2 className="text-3xl font-bold mb-12 text-center dark:text-white">Our Values</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                            <div className="flex flex-col items-center text-center">
                                <FaGlobeAmericas className="w-12 h-12 text-light-primary mb-4" />
                                <h3 className="text-xl font-semibold mb-2 dark:text-white">Global Perspective</h3>
                                <p className="text-gray-600 dark:text-white/70">Understanding diverse cultures and regulations</p>
                            </div>
                            <div className="flex flex-col items-center text-center">
                                <FaUsers className="w-12 h-12 text-light-primary mb-4" />
                                <h3 className="text-xl font-semibold mb-2 dark:text-white">Client-Centric</h3>
                                <p className="text-gray-600 dark:text-white/70">Putting our clients' needs at the forefront</p>
                            </div>
                            <div className="flex flex-col items-center text-center">
                                <FaAward className="w-12 h-12 text-light-primary mb-4" />
                                <h3 className="text-xl font-semibold mb-2 dark:text-white">Excellence</h3>
                                <p className="text-gray-600 dark:text-white/70">Striving for the highest quality in our services</p>
                            </div>
                            <div className="flex flex-col items-center text-center">
                                <FaCheckCircle className="w-12 h-12 text-light-primary mb-4" />
                                <h3 className="text-xl font-semibold mb-2 dark:text-white">Integrity</h3>
                                <p className="text-gray-600 dark:text-white/70">Maintaining honesty and transparency in all we do</p>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="py-16">
                    <div className="container mx-auto px-4">
                        <h2 className="text-3xl font-bold mb-12 text-center dark:text-white">Meet Our Team</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
                            {teamMembers.map((member, index) => (
                                <TeamMember key={index} {...member} />
                            ))}
                        </div>
                    </div>
                </section>

                <section className="bg-white dark:bg-[#2a323c] py-16 max-w-4xl mx-auto">
                    <div className="mx-auto px-4">
                        <h2 className="text-3xl font-bold mb-8 text-center dark:text-white">Our Journey</h2>
                        <div className="max-w-3xl mx-auto font-medium text-lg">
                            <p className="text-gray-700 dark:text-white/70 mb-4">
                                Founded in 2010, Visa Navigator began as a small consultancy firm dedicated to helping
                                international students navigate the complex world of study visas. Over the years, we've
                                expanded our services to cover all types of visas, from work permits to tourist visas.
                            </p>
                            <p className="text-gray-700 dark:text-white/70 mb-4">
                                Our team has grown from a handful of passionate individuals to a network of experts
                                spanning multiple countries. We've assisted thousands of clients in realizing their
                                dreams of international travel, work, and study.
                            </p>
                            <p className="text-gray-700 dark:text-white/70">
                                Today, Visa Navigator stands as a leader in the visa consultancy industry, known for
                                our personalized approach, up-to-date knowledge of international regulations, and
                                unwavering commitment to client success.
                            </p>
                        </div>
                    </div>
                </section>
            </div>
        </>
    );
};

export default About;
