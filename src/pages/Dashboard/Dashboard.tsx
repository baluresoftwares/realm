"use client"

import { useState } from "react"
import { Bell, ChevronDown, Layout, LogOut, Menu, MessageSquare, PieChart, Settings, Users } from "lucide-react"
import { Button } from "@/components/UI/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/UI/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/UI/avatar"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/UI/dropdown-menu"
import { Input } from "@/components/UI/input"
import { ScrollArea } from "@/components/UI/scroll-area"

export default function Dashboard() {
    const [sidebarOpen, setSidebarOpen] = useState(false)

    return (
        <div className="flex h-screen bg-gray-100 dark:bg-gray-900">
            {/* Sidebar */}
            <aside
                className={`bg-white dark:bg-gray-800 w-64 min-h-screen p-4 ${
                    sidebarOpen ? "block" : "hidden"
                } md:block transition-all duration-300 ease-in-out`}
            >
                <nav className="space-y-1">
					<DropdownMenu>
						<DropdownMenuTrigger asChild>
							<Button variant="ghost" className="w-full h-25 justify-between flex items-center">
								<div className="flex items-center">
									<Avatar className="h-8 w-8 mr-2">
										<AvatarImage src="/placeholder.svg?height=32&width=32" alt="User" />
										<AvatarFallback>JD</AvatarFallback>
									</Avatar>
									<div className="flex flex-col text-left">
										<span className="font-medium">John Doe</span>
										<span className="text-xs text-gray-500">Administrator</span> {/* Role text */}
									</div>
								</div>
								<ChevronDown className="ml-2 h-4 w-4" />
							</Button>
						</DropdownMenuTrigger>
						<DropdownMenuContent className="w-56">
							<DropdownMenuLabel>My Account</DropdownMenuLabel>
							<DropdownMenuSeparator />
							<DropdownMenuItem>Profile</DropdownMenuItem>
							<DropdownMenuItem>Settings</DropdownMenuItem>
							<DropdownMenuSeparator />
							<DropdownMenuItem>
								<LogOut className="mr-2 h-4 w-4" />
								<span>Log out</span>
							</DropdownMenuItem>
						</DropdownMenuContent>
					</DropdownMenu>
                    <Button variant="ghost" className="w-full justify-start bg-neutral-200">
                        <PieChart className="mr-2 h-4 w-4" />
                        Dashboard
                    </Button>
                    <Button variant="ghost" className="w-full justify-start">
                        <Users className="mr-2 h-4 w-4" />
                        Users
                    </Button>
                    <Button variant="ghost" className="w-full justify-start">
                        <MessageSquare className="mr-2 h-4 w-4" />
                        Messages
                    </Button>
                    <Button variant="ghost" className="w-full justify-start">
                        <Settings className="mr-2 h-4 w-4" />
                        Settings
                    </Button>
                </nav>
            </aside>

            {/* Main Content */}
            <div className="flex-1 flex flex-col overflow-hidden">
                {/* Header */}
                <header className="bg-white dark:bg-gray-800 shadow-sm">
                    <div className="flex items-center justify-between p-4">
                        <div className="flex items-center space-x-4">
                            <Button
                                variant="ghost"
                                size="icon"
                                onClick={() => setSidebarOpen(!sidebarOpen)}
                                className="md:hidden"
                            >
                                <Menu className="h-6 w-6" />
                            </Button>
                        </div>
                        <div className="flex items-center space-x-4">
                            
                        </div>
                    </div>
                </header>

                {/* Dashboard Content */}
                <ScrollArea className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-100 dark:bg-gray-900 p-6">
                    <h1 className="text-3xl font-semibold mb-6 dark:text-white">Dashboard</h1>
                    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
                        <Card>
                            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                                <CardTitle className="text-sm font-medium">Total Users</CardTitle>
                                <Users className="h-4 w-4 text-muted-foreground" />
                            </CardHeader>
                            <CardContent>
                                <div className="text-2xl font-bold">1,234</div>
                                <p className="text-xs text-muted-foreground">+10% from last month</p>
                            </CardContent>
                        </Card>
                        <Card>
                            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                                <CardTitle className="text-sm font-medium">Total Revenue</CardTitle>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    className="h-4 w-4 text-muted-foreground"
                                >
                                    <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
                                </svg>
                            </CardHeader>
                            <CardContent>
                                <div className="text-2xl font-bold">$54,231</div>
                                <p className="text-xs text-muted-foreground">+20.1% from last month</p>
                            </CardContent>
                        </Card>
                        <Card>
                            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                                <CardTitle className="text-sm font-medium">Active Now</CardTitle>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    className="h-4 w-4 text-muted-foreground"
                                >
                                    <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
                                </svg>
                            </CardHeader>
                            <CardContent>
                                <div className="text-2xl font-bold">573</div>
                                <p className="text-xs text-muted-foreground">+201 since last hour</p>
                            </CardContent>
                        </Card>
                        <Card>
                            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                                <CardTitle className="text-sm font-medium">Notifications</CardTitle>
                                <Bell className="h-4 w-4 text-muted-foreground" />
                            </CardHeader>
                            <CardContent>
                                <div className="text-2xl font-bold">12</div>
                                <p className="text-xs text-muted-foreground">3 unread messages</p>
                            </CardContent>
                        </Card>
                    </div>

                    <h2 className="text-2xl font-semibold mt-8 mb-4 dark:text-white">Recent Activity</h2>
                    <Card>
                        <CardHeader>
                            <CardTitle>Latest Transactions</CardTitle>
                            <CardDescription>You made 265 sales this month.</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <div className="space-y-8">
                                {[1, 2, 3].map((i) => (
                                    <div key={i} className="flex items-center">
                                        <Avatar className="h-9 w-9">
                                            <AvatarImage src={`/placeholder.svg?height=36&width=36`} alt="Avatar" />
                                            <AvatarFallback>OM</AvatarFallback>
                                        </Avatar>
                                        <div className="ml-4 space-y-1">
                                            <p className="text-sm font-medium leading-none">Olivia Martin</p>
                                            <p className="text-sm text-muted-foreground">
                                                olivia.martin@email.com
                                            </p>
                                        </div>
                                        <div className="ml-auto font-medium">+$1,999.00</div>
                                    </div>
                                ))}
                            </div>
                        </CardContent>
                    </Card>
                </ScrollArea>
            </div>
        </div>
    )
}