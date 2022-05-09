import axios from "axios";

const bearer_token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyZXN1bHRzIjp7ImlkIjoxLCJuYW1hIjoiSXNtYWlsIiwiamFiYXRhbiI6IkFkbWluIiwidGVsZXBvbiI6IjA4MjM0MTIiLCJlbWFpbCI6ImlzQG1haWwuY29tIn0sImlhdCI6MTY1MjA4NjQ3NSwiZXhwIjoxNjUyMzQ1Njc1fQ.O-abLZxcB3DZcbsJ9hCYBUOTJgnDtM4iNbl-5HwK0BU"

export default axios.create({
    baseURL: 'http://localhost:1337',
    headers: {
        Authorization: `Bearer ${bearer_token}`
    }
})