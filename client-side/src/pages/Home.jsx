import axios from "axios";
import React, { useEffect, useState } from "react";
import ReactFlow, { addEdge, Controls } from "react-flow-renderer";
import { Link } from "react-router-dom";
import Sidebar from "../components/Sidebar";

export default function Home() {
    const [users, setUsers] = useState([]);
    const [nodes, setNodes] = useState([]);
    const [edges, setEdges] = useState([]);
    const [hobbies] = useState(["Reading", "Hiking", "Painting", "Running", "Swimming","Dancing","Writing","Singing"]);

    useEffect(() => {
        fetchUsers();
    }, []);

    // Function for fetching users
    async function fetchUsers() {
        try {
            const response = await axios.get(`http://localhost:3000/users`);

            const fetchedUsers = response.data.data; // Use fetched data directly
            setUsers(fetchedUsers);

            // Map user data to nodes
            const userNodes = fetchedUsers.map((user, index) => ({
                id: user._id, // Unique ID for the node
                data: {
                    label: (
                        <div
                            style={{
                                textAlign: "center",
                                
                                background: "#e3f2fd",
                                borderRadius: "5px",
                            }}
                        >
                            <strong>{user.name}</strong>
                            <br />
                            Age: {user.age} <br />
                            <div className="actions d-flex gap-2">
                                <Link to={`/user/${user._id}`} className="btn btn-warning">Edit</Link>
                                <button onClick={() => handleDelete(user._id)} className="btn btn-danger">Delete</button>
                            </div>
                        </div>
                    ),
                },
                position: { x: 200, y: index * 150 }, // Position the nodes vertically
            }));

            // Map user relationships to edges (connect each user to the next)
            const userEdges = fetchedUsers.slice(1).map((user, index) => ({
                id: `edge-${fetchedUsers[index]._id}-${user._id}`,
                source: fetchedUsers[index]._id, // Connect current user
                target: user._id, // To the next user
                animated: true, // Animated edge
            }));

            setNodes(userNodes);
            setEdges(userEdges);

            console.log("Nodes:", userNodes);
            console.log("Edges:", userEdges);
        } catch (error) {
            console.error("Error fetching users:", error);
        }
    }

    // Handle deleting a user
    async function handleDelete(id) {
        try {
            const response = await axios.delete(`http://localhost:3000/delete/user/${id}`);
            console.log("Deleting response:", response);

            // Refetch the updated user list
            fetchUsers();
        } catch (error) {
            console.error("Error deleting user:", error);
        }
    }

    // Handle new connections (optional if users need to create edges manually)
    const onConnect = (connection) => setEdges((eds) => addEdge(connection, eds));

    // Handle dragging a hobby
    const handleDragStart = (event, hobby) => {
        event.dataTransfer.setData("hobby", hobby);
    };

    // Handle dropping a hobby on a node
    const handleDrop = (event, nodeId) => {
        const hobby = event.dataTransfer.getData("hobby");
        setNodes((nds) =>
            nds.map((node) => {
                if (node.id === nodeId) {
                    return {
                        ...node,
                        data: {
                            ...node.data,
                            label: (
                                <div>
                                    <strong>{node.data.label}</strong>
                                    <br />
                                    Hobbies: {(node.hobbies || []).concat(hobby).join(", ")}
                                </div>
                            ),
                        },
                        hobbies: (node.hobbies || []).concat(hobby),
                    };
                }
                return node;
            })
        );
    };

    return (
        <div>

            <div className="d-flex" style={{ height: "100vh" }}>

                <ReactFlow className="w-70" nodes={nodes} edges={edges}
                    onNodeDragStop={(event, node) => handleDrop(event, node._id)}

                    onConnect={onConnect} fitView>

                    
                    
                    <Controls />
                </ReactFlow>

                <div className="border container w-50">
                    <Sidebar hobbies={hobbies} onDragStart={handleDragStart} />
                </div>
            </div>
        </div>
    );
}
