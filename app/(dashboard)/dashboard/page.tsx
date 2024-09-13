"use client"
import React from 'react'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts'
import { Eye, Users, MessageSquare, BarChart2 } from 'lucide-react'
import SectionWrapper from '@/components/common/section-wrapper'
import RecentContacts from './_components/dashboard/recent-contact'

// Mock data for the chart
const chartData = [
  { date: '2023-06-01', views: 100, contacts: 10 },
  { date: '2023-06-02', views: 150, contacts: 15 },
  { date: '2023-06-03', views: 200, contacts: 20 },
  { date: '2023-06-04', views: 180, contacts: 18 },
  { date: '2023-06-05', views: 250, contacts: 25 },
  { date: '2023-06-06', views: 300, contacts: 30 },
  { date: '2023-06-07', views: 280, contacts: 28 },
]

// Mock data for the table
const tableData = [
  { name: 'Product A', views: 1000, contacts: 100, conversionRate: 10, postDate: '2023-06-01' },
  { name: 'Product B', views: 800, contacts: 90, conversionRate: 11.25, postDate: '2023-06-02' },
  { name: 'Product C', views: 1200, contacts: 150, conversionRate: 12.5, postDate: '2023-06-03' },
  { name: 'Product D', views: 600, contacts: 80, conversionRate: 13.33, postDate: '2023-06-04' },
  { name: 'Product E', views: 1500, contacts: 200, conversionRate: 13.33, postDate: '2023-06-05' },
]

export default function MarketplaceDashboard() {
  const totalViews = 5100
  const uniqueViews = 4000
  const totalContacts = 620
  const conversionRate = (totalContacts / totalViews * 100).toFixed(2)

  return (
    <SectionWrapper className="px-10 h-[calc(100vh-50px)]   overflow-y-auto">

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Views</CardTitle>
            <Eye className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{totalViews.toLocaleString()}</div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Unique Views</CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{uniqueViews.toLocaleString()}</div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Contacts</CardTitle>
            <MessageSquare className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{totalContacts.toLocaleString()}</div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Conversion Rate</CardTitle>
            <BarChart2 className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{conversionRate}%</div>
          </CardContent>
        </Card>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3  gap-4 w-full mt-10">
        <Card className=' col-span-2'>
          <CardHeader>
            <CardTitle>Post Performance Over Time</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="mb-4">
              <Select defaultValue="day">
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Select time range" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="day">By Day</SelectItem>
                  <SelectItem value="week">By Week</SelectItem>
                  <SelectItem value="month">By Month</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="h-[300px]">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={chartData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="date" />
                  <YAxis yAxisId="left" />
                  <YAxis yAxisId="right" orientation="right" />
                  <Tooltip />
                  <Legend />
                  <Line yAxisId="left" type="monotone" dataKey="views" stroke="#8884d8" name="Total Views" />
                  <Line yAxisId="right" type="monotone" dataKey="contacts" stroke="#82ca9d" name="Total Contacts" />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>
        <RecentContacts />

        {/* Post Performance Graph */}

      </div>
      <div className='mt-10  bg-white rounded shadow p-6'>
        <h3 className='text-lg font-bold'>Post Performance Over Time</h3>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Product Name</TableHead>
              <TableHead>Total Views</TableHead>
              <TableHead>Total Contacts</TableHead>
              <TableHead>Conversion Rate (%)</TableHead>
              <TableHead>Post Date</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {tableData.map((product) => (
              <TableRow key={product.name} className='my-10 '>
                <TableCell className="font-medium">{product.name}</TableCell>
                <TableCell>{product.views.toLocaleString()}</TableCell>
                <TableCell>{product.contacts.toLocaleString()}</TableCell>
                <TableCell>{product.conversionRate.toFixed(2)}%</TableCell>
                <TableCell>{product.postDate}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>

    </SectionWrapper>
  )
}