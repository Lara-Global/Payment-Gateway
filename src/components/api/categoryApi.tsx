import axios from "axios";
const getCompanyFromLocalStorage = () => {
    if (typeof window !== "undefined") {
        return localStorage.getItem('company');
    }
    return null; 
};


export const getcategory = async (token: string) => {
    const company = getCompanyFromLocalStorage();
    try {
        const response = await axios.get(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/category/company/${company}`, {
            headers: {
                'Authorization': `Bearer ${token}`,
            },
        });
        return response.data;
    } catch (error) {
        console.error("Error fetching category:", error);
        throw new Error("Failed to fetch category");
    }
};

export const deleteProduct = async (token: string, productId: string) => {
    try {
        await axios.delete(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/category/${productId}`, {
            headers: {
                'Authorization': `Bearer ${token}`,
            },
        });
    } catch (error) {
        console.error("Error removing product:", error);
        throw new Error("Failed to remove product");
    }
};