import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs";
import { Select, SelectContent, SelectItem } from "../ui/select";
import { SelectValue } from "../ui/select";
import { DropdownMenu, DropdownMenuContent, DropdownMenuTrigger } from "../ui/dropdown-menu";
import { Button } from "../ui/button";
import { IconLayoutColumns } from "@tabler/icons-react";
import { DndContext } from "@dnd-kit/core";
import { TableBody, TableHeader } from "../ui/table";
import { SortableContext } from "@dnd-kit/sortable";


export function DataTableResearch ({
    data: initialData
}) {
    const [data, setData] = React.useState(() => initialData)
    const [rowSelection, setRowSelection] = React.useState({})
    const [columnVisibility, setColumnVisibility] = React.useState({})
    const [columnFilters, setColumnFilters] = React.useState([])
    const [sorting, setSorting] = React.useState([])
    const [pagination, setPagination] = React.useState({
        pageIndex: 0,
        pageSize: 10,
    })



    return (
        <Tabs>
            <div>
                <Label>
                    
                </Label>
                <Select>
                    <SelectTrigger>
                        <SelectValue placplaceholder="Select a view"e />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectItem value="" ></SelectItem>
                        <SelectItem value="" ></SelectItem>
                        <SelectItem value="" ></SelectItem>
                        <SelectItem value="" ></SelectItem>
                    </SelectContent>
                </Select>
                <TabsList>
                    <TabsTrigger value=""></TabsTrigger>
                    <TabsTrigger value=""></TabsTrigger>
                    <TabsTrigger value=""></TabsTrigger>
                    <TabsTrigger value=""></TabsTrigger>
                </TabsList>
                <div>
                    <DropdownMenu>
                        <DropdownMenuTrigger>
                            <Button>
                                <IconLayoutColumns>
                                    <span></span>
                                    <span></span>
                                </IconLayoutColumns>
                            </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent>

                        </DropdownMenuContent>
                    </DropdownMenu>
                    <Button>
                        <IconPlus />
                        <span></span>
                    </Button>
                </div>
            </div>
            <TabsContent>
                <div>
                    <DndContext>
                        <Table>
                            <TableHeader>
                                <TableRow>
                                    <Tablehead>

                                    </Tablehead>
                                </TableRow>
                            </TableHeader>
                            <TableBody>
                                <SortableContext>
                                    <DraggableRow />
                                </SortableContext>
                            </TableBody>
                        </Table>
                    </DndContext>
                </div>
            </TabsContent>
        </Tabs>
    )
}