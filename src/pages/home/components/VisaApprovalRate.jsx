import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const VisaApprovalRates = () => {
    const data = [
        { country: 'USA', approvalRate: 78 },
        { country: 'Canada', approvalRate: 85 },
        { country: 'UK', approvalRate: 82 },
        { country: 'Australia', approvalRate: 79 },
        { country: 'Germany', approvalRate: 76 },
        { country: 'France', approvalRate: 74 },
        { country: 'Japan', approvalRate: 88 },
        { country: 'South Korea', approvalRate: 81 },
        { country: 'Singapore', approvalRate: 90 },
        { country: 'New Zealand', approvalRate: 83 },
    ];

    return (
        <section className="w-11/12 sm:container mx-auto py-14 md:py-24 rounded-lg shadow-lg overflow-hidden bg-gray-100 dark:bg-black/10">
            <div className="text-center max-w-4xl mx-auto space-y-4 mb-8 md:mb-14">
                <h2 className="text-3xl font-bold dark:text-white">Visa Approval Rates by Country</h2>
                <p className="text-lg dark:text-white">
                    Percentage of visa applications approved in the last year
                </p>
            </div>
            <div className="w-full md:w-9/12 mx-auto h-[60vh]">
                <ResponsiveContainer width="100%" height="100%">
                    <BarChart
                        data={data}
                        margin={{
                            top: 20,
                            right: 30,
                            left: 20,
                            bottom: 5,
                        }}
                    >
                        <CartesianGrid strokeDasharray="3 3" className="opacity-50" />
                        <XAxis
                            dataKey="country"
                            tick={{ fill: '#4B5563' }}
                            axisLine={{ stroke: '#9CA3AF' }}
                        />
                        <YAxis
                            tick={{ fill: '#4B5563' }}
                            axisLine={{ stroke: '#9CA3AF' }}
                        />
                        <Tooltip
                            contentStyle={{
                                backgroundColor: 'rgba(255, 255, 255, 0.8)',
                                border: 'none',
                                borderRadius: '0.375rem',
                                boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
                                padding: '0.75rem'
                            }}
                            itemStyle={{ color: '#4B5563' }}
                        />
                        <Legend
                            wrapperStyle={{
                                paddingTop: '1.5rem',
                                fontSize: '0.875rem',
                                color: '#4B5563'
                            }}
                        />
                        <Bar
                            dataKey="approvalRate"
                            fill="#3B82F6"
                            name="Approval Rate (%)"
                            radius={[4, 4, 0, 0]}
                        />
                    </BarChart>
                </ResponsiveContainer>
            </div>
        </section>
    );
};

export default VisaApprovalRates;

