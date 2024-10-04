"use client"

import { useState } from 'react'
import { Search, Sliders, X, ChevronRight } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Separator } from "@/components/ui/separator"

export default function ImprovedSearchFilter() {
  const [isFilterOpen, setIsFilterOpen] = useState(false)
  const [minPrice, setMinPrice] = useState("")
  const [maxPrice, setMaxPrice] = useState("")
  const [searchTerm, setSearchTerm] = useState("")
  const [category1, setCategory1] = useState("")
  const [category2, setCategory2] = useState("")
  const [category3, setCategory3] = useState("")
  const [sortBy, setSortBy] = useState("newest")
  const [condition, setCondition] = useState("all")

  const handleSearch = () => {
    console.log("Searching with:", { searchTerm, category1, category2, category3, minPrice, maxPrice, sortBy, condition })
    // Implement search logic here
  }

  const clearFilters = () => {
    setSearchTerm("")
    setCategory1("")
    setCategory2("")
    setCategory3("")
    setMinPrice("")
    setMaxPrice("")
    setSortBy("newest")
    setCondition("all")
  }

  return (
    <div className="w-full bg-background">
      <div className="max-w-7xl mx-auto p-4 space-y-4">
        <div className="flex items-center space-x-2">
          <div className="relative flex-grow">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" />
            <Input
              type="text"
              placeholder="Find items for sale"
              className="pl-10 pr-4 py-2 w-full"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <Button onClick={handleSearch} className="bg-emerald-500 hover:bg-emerald-600 text-white">
            Search
          </Button>
          <Button
            variant="outline"
            onClick={() => setIsFilterOpen(!isFilterOpen)}
            className="border-emerald-500 text-emerald-500 hover:bg-emerald-50"
          >
            <Sliders className="w-4 h-4 mr-2" />
            Filters
          </Button>
        </div>

        {isFilterOpen && (
          <div className="bg-white p-4 rounded-lg border border-gray-200 space-y-4">
            <div className="flex justify-between items-center">
              <h2 className="text-lg font-semibold">Filters</h2>
              <Button variant="ghost" onClick={() => setIsFilterOpen(false)} className="h-8 w-8 p-0">
                <X className="h-4 w-4" />
              </Button>
            </div>
            <Separator />
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <Label htmlFor="category1" className="text-sm font-medium text-gray-700">Category 1</Label>
                <Select value={category1} onValueChange={setCategory1}>
                  <SelectTrigger id="category1" className="mt-1">
                    <SelectValue placeholder="Select category" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="electronics">Electronics</SelectItem>
                    <SelectItem value="home">Home & Garden</SelectItem>
                    <SelectItem value="fashion">Fashion</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <Label htmlFor="category2" className="text-sm font-medium text-gray-700">Category 2</Label>
                <Select value={category2} onValueChange={setCategory2}>
                  <SelectTrigger id="category2" className="mt-1">
                    <SelectValue placeholder="Select category" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="smartphones">Smartphones</SelectItem>
                    <SelectItem value="laptops">Laptops</SelectItem>
                    <SelectItem value="accessories">Accessories</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <Label htmlFor="category3" className="text-sm font-medium text-gray-700">Category 3</Label>
                <Select value={category3} onValueChange={setCategory3}>
                  <SelectTrigger id="category3" className="mt-1">
                    <SelectValue placeholder="Select category" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="audio">Audio</SelectItem>
                    <SelectItem value="video">Video</SelectItem>
                    <SelectItem value="gaming">Gaming</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div>
                <Label htmlFor="min-price" className="text-sm font-medium text-gray-700">Min Price</Label>
                <Input
                  id="min-price"
                  type="number"
                  placeholder="Min"
                  value={minPrice}
                  onChange={(e) => setMinPrice(e.target.value)}
                  className="mt-1"
                />
              </div>
              <div>
                <Label htmlFor="max-price" className="text-sm font-medium text-gray-700">Max Price</Label>
                <Input
                  id="max-price"
                  type="number"
                  placeholder="Max"
                  value={maxPrice}
                  onChange={(e) => setMaxPrice(e.target.value)}
                  className="mt-1"
                />
              </div>
              <div>
                <Label htmlFor="sort-by" className="text-sm font-medium text-gray-700">Sort By</Label>
                <Select value={sortBy} onValueChange={setSortBy}>
                  <SelectTrigger id="sort-by" className="mt-1">
                    <SelectValue placeholder="Sort by" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="newest">Newest First</SelectItem>
                    <SelectItem value="oldest">Oldest First</SelectItem>
                    <SelectItem value="price-low">Price: Low to High</SelectItem>
                    <SelectItem value="price-high">Price: High to Low</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <Label className="text-sm font-medium text-gray-700">Condition</Label>
                <RadioGroup value={condition} onValueChange={setCondition} className="flex space-x-4 mt-1">
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="all" id="all" />
                    <Label htmlFor="all" className="text-sm">All</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="new" id="new" />
                    <Label htmlFor="new" className="text-sm">New</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="used" id="used" />
                    <Label htmlFor="used" className="text-sm">Used</Label>
                  </div>
                </RadioGroup>
              </div>
            </div>
            <Separator />
            <div className="flex justify-end space-x-2">
              <Button variant="outline" onClick={clearFilters}>Clear All</Button>
              <Button onClick={handleSearch} className="bg-emerald-500 hover:bg-emerald-600 text-white">
                Apply Filters
              </Button>
            </div>
          </div>
        )}
       
      </div>
    </div>
  )
}