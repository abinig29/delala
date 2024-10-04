import { useState } from 'react'
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"

const categories = [
    "Virus Removal",
    "Refrigerator",
    "Oil Change",
    "House Cleaning",
    "IKEA Assembly",
    "Painting",
    "Screen Replacement"
]

export default function ServiceFilter() {
    const [searchTerm, setSearchTerm] = useState('')
    const [selectedCategory, setSelectedCategory] = useState('')

    const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearchTerm(event.target.value)
    }

    const handleCategoryChange = (value: string) => {
        setSelectedCategory(value)
    }

    const clearFilter = () => {
        setSearchTerm('')
        setSelectedCategory('')
    }

    const filteredCategories = categories.filter(category =>
        category.toLowerCase().includes(searchTerm.toLowerCase())
    )

    return (
        <div className="w-full max-w-sm mx-auto space-y-4 flex-1 bg-white rounded-lg p-4">
            <Input
                type="text"
                placeholder="Search services..."
                value={searchTerm}
                onChange={handleSearch}
            />
            <div className="space-y-2">
                <h2 className="text-lg font-semibold">Categories</h2>
                <RadioGroup value={selectedCategory} onValueChange={handleCategoryChange}>
                    {filteredCategories.map((category) => (
                        <div key={category} className="flex items-center space-x-2">
                            <RadioGroupItem value={category} id={category} />
                            <Label htmlFor={category}>{category}</Label>
                        </div>
                    ))}
                </RadioGroup>
            </div>
            <Button onClick={clearFilter} variant="outline" className="w-full">
                Clear Filter
            </Button>
        </div>
    )
}