import { LampFloor, Umbrella, Lamp, Radio, Monitor, Camera } from 'lucide-react'

interface CategoryProps {
    icon: string
    title: string
    count?: number
}

const Category: React.FC<CategoryProps> = ({ icon, title, count }) => (
    <div className="flex flex-col items-center p-4 py-14 bg-white rounded-lg shadow-sm">
        <img
            src={icon}
            alt=""
            className='w-20 h-20 object-cover'
        />
        <h3 className="text-sm font-semibold text-center">{title}</h3>
        {count && <p className="text-xs text-gray-500">{count} ads</p>}
    </div>
)

const Section: React.FC<{ title: string; count: number; children: React.ReactNode }> = ({ title, count, children }) => (
    <div className="mb-8">
        <h2 className="text-xl font-bold mb-2">{title}</h2>
        <p className="text-sm text-gray-500 mb-4">{count.toLocaleString()} ads</p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">{children}</div>
    </div>
)

export default function SubProductCatalog() {
    return (
        <div className="max-w-7xl mx-auto p-4 mt-10">
            <Section title="Furniture & Decor" count={22775}>
                <Category icon="/homeicon.png" title="HOME" />
                <Category icon="/officeicon.png" title="OFFICE FURNITURE" />
                <Category icon="/gardenicon.png" title="GARDEN" />
                <Category icon="/decoricon.png" title="DECOR" />
            </Section>
            {/* 
            <Section title="Electronics" count={23307}>
                <Category icon={<Monitor />} title="HOME APPLIANCES" />
                <Category icon={<Radio />} title="HOME ENTERTAINMENT" />
                <Category icon={<Monitor />} title="COMPUTERS, SOFTWARE & ACCESSORIES" />
                <Category icon={<Camera />} title="CAMERAS" />
            </Section> */}
        </div>
    )
}