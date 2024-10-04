import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { HeartIcon, MapPinIcon, BuildingIcon, DollarSignIcon } from "lucide-react"
import { IJob } from "../page"
import ApplyButton from "./apply"

const JobCard = ({ job }: { job: IJob }) => {
    return (
        <Card key={job.id} className="w-full flex flex-col">
            <CardHeader>
                <CardTitle className="flex justify-between items-center">
                    <span className="text-lg font-bold">{job.title}</span>
                    <HeartIcon className="w-5 h-5 text-gray-400 cursor-pointer" />
                </CardTitle>
            </CardHeader>
            <CardContent className="flex-grow">
                <div className="space-y-2">
                    <div className="flex items-center">
                        <BuildingIcon className="w-4 h-4 mr-2 text-gray-500" />
                        <span>{job.company}</span>
                    </div>
                    <div className="flex items-center">
                        <MapPinIcon className="w-4 h-4 mr-2 text-gray-500" />
                        <span>{job.location}</span>
                    </div>
                    <div className="flex items-center">
                        <DollarSignIcon className="w-4 h-4 mr-2 text-gray-500" />
                        <span>${job.salary.toLocaleString()}/year</span>
                    </div>
                    <p className="text-sm text-gray-600 mt-2">{job.description}</p>
                </div>
            </CardContent>
            <CardFooter className="flex flex-col space-y-4">
                <div className="flex justify-between items-center w-full">
                    <Badge variant="secondary">{job.type}</Badge>
                    <span className="text-sm text-gray-500">{job.category}</span>
                </div>
                <ApplyButton />
            </CardFooter>
        </Card>
    )
}

export default JobCard