import { useState } from 'react'
import { Input } from "@/components/ui/input"
import { Checkbox } from "@/components/ui/checkbox"
import { ChevronUp, ChevronDown, Search } from 'lucide-react'

const models = [
    "Defender",
    "Discovery",
    "Discovery Sport",
    "Evoque",
    "FreeLander",
    "LR2",
    "LR3",
    "LR4",
    "Range Rover"
]

export default function ModelFilter() {
    const [isExpanded, setIsExpanded] = useState(true)
    const [searchTerm, setSearchTerm] = useState("")
    const [selectedModels, setSelectedModels] = useState<string[]>(["Range Rover"])

    const filteredModels = models.filter(model =>
        model.toLowerCase().includes(searchTerm.toLowerCase())
    )

    const toggleModel = (model: string) => {
        setSelectedModels(prev =>
            prev.includes(model)
                ? prev.filter(m => m !== model)
                : [...prev, model]
        )
    }

    return (
        <div className="w-full border bg-white rounded-md ">
            <div
                className="flex justify-between items-center px-2 py-[6px] cursor-pointer"
                onClick={() => setIsExpanded(!isExpanded)}
            >
                <h2 className="">Model</h2>
                {isExpanded ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
            </div>
            {isExpanded && (
                <div className="p-4">
                    <div className="relative mb-4">
                        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
                        <Input
                            type="text"
                            placeholder="Search"
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            className="pl-10 pr-4 py-2 w-full border rounded-md"
                        />
                    </div>
                    <div className="space-y-2">
                        {filteredModels.map(model => (
                            <label key={model} className="flex items-center space-x-2 cursor-pointer">
                                <Checkbox
                                    checked={selectedModels.includes(model)}
                                    onCheckedChange={() => toggleModel(model)}
                                />
                                <span className="text-sm">{model}</span>
                            </label>
                        ))}
                    </div>
                </div>
            )}
        </div>
    )
}