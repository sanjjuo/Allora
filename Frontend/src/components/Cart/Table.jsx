import { Card, Typography } from "@material-tailwind/react";
import { RiDeleteBin5Line } from "react-icons/ri";
import { SlPlus } from "react-icons/sl";
import { SlMinus } from "react-icons/sl";
import { remove } from "../../Store/CartSlice";
import { useDispatch } from "react-redux";

const TABLE_HEAD = ["Product", "Name", "Price", "Quantity", "Remove"];

export function Table({ cartItems }) {

    const disPatch = useDispatch()
    const removeItem = (id) => {
        // dispatch an remove action
        disPatch(remove(id))
    }
    return (
        <Card className="h-full w-full overflow-y-auto rounded-none">
            <table className="w-full min-w-max table-auto text-left">
                <thead>
                    <tr>
                        {TABLE_HEAD.map((head) => (
                            <th
                                key={head}
                                className="border-b border-blue-gray-100 bg-blue-gray-50 p-4"
                            >
                                <Typography
                                    color="blue-gray"
                                    className="font-bold uppercase tracking-wider leading-none opacity-70"
                                >
                                    {head}
                                </Typography>
                            </th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {cartItems.map((item, index) => (
                        <tr key={index}>
                            <td className="p-4 border-b border-blue-gray-50 w-[180px] h-[180px]">
                                <img src={item.image} alt="" className="w-full h-full object-contain" />
                            </td>
                            <td className="p-4 border-b border-blue-gray-50">
                                <Typography
                                    color="blue-gray"
                                    className="font-normal truncate w-60"
                                >
                                    {item.title}
                                </Typography>
                            </td>
                            <td className="p-4 border-b border-blue-gray-50">
                                <Typography
                                    color="blue-gray"
                                    className="font-normal"
                                >
                                    $ {item.price}
                                </Typography>
                            </td>
                            <td className="p-4 border-b border-blue-gray-50">
                                <ul className="flex items-center gap-2">
                                    <li className="text-2xl"><SlPlus /></li>
                                    <li>5</li>
                                    <li className="text-2xl"><SlMinus/></li>
                                </ul>
                            </td>
                            <td className="p-4 border-b border-blue-gray-50">
                                <Typography
                                    as="a"
                                    href="#"
                                    color="blue-gray"
                                    className="font-medium"
                                    onClick={()=>removeItem(item.id)}
                                >
                                    <RiDeleteBin5Line className="text-gray-700 hover:text-primary"/>
                                </Typography>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </Card>
    );
}
