import { useEffect, useState } from "react";
import axios from "axios";
import { jwtDecode } from "jwt-decode";

const Dashboard = () => {
    const [formData, setFormData] = useState({
        amount: "",
        category: "",
        description: "",
    });
    const [expenses, setExpenses] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");
    const [success, setSuccess] = useState("");
    const [fetchingExpenses, setFetchingExpenses] = useState(false);

    const categories = [
        "Travelling",
        "Groceries",
        "Shopping",
        "Food",
        "Entertainment",
        "Bills",
        "Others",
    ];

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError("");
        setSuccess("");
        setLoading(true);
        try {
            const token = localStorage.getItem("token");
            await axios.post(
                "http://localhost:3000/api/v1/user/addexpense",
                formData,
                {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                }
            );
            setSuccess("Expense added successfully!");
            setFormData({ amount: "", category: "", description: "" });
            fetchExpenses();
        } catch (err) {
            setError(err.response?.data?.error || "Failed to add expense. Please try again.");
        } finally {
            setLoading(false);
        }
    };

    const handleChange = (e)=>{
        setFormData({
            ...formData,
            [e.target.name] : e.target.value,
        });
    };

    const fetchExpenses = async () => {
        try {
            setFetchingExpenses(true);
            const token = localStorage.getItem("token");
            if (!token) {
                setError("Please login to view expenses");
                return;
            }

            const decoded = jwtDecode(token);
            const userId = decoded.id;

            const response = await axios.get(
                "http://localhost:3000/api/v1/user/expenses",
                {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                    params: { userId }
                }
            );
            setExpenses(response.data.expenses);
        } catch (err) {
            console.error("Error fetching expenses:", err);
            setError("Failed to fetch expenses");
        } finally {
            setFetchingExpenses(false);
        }
    };

    useEffect(() => {
        fetchExpenses();
    }, []);

    return(
        <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-8 px-4 sm:px-6 lg:px-8 transition-colors duration-200">
            <div className="max-w-7xl mx-auto">
                <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6 mb-8">
                    <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                        Add New Expense
                    </h2>
                    {/* for error */}
                    {error && (
                        <div className="mb-4 bg-red-50 dark:bg-red-900/30 border border-red-200 dark:border-red-500/30 text-red-600 dark:text-red-400 px-4 py-3 rounded-lg text-sm">
                            {error}
                        </div>
                    )}

                    {/* for success  message*/}
                    {success && (
                        <div className="mb-4 bg-green-50 dark:bg-green-900/30 border border-green-200 dark:border-green-500/30 text-green-600 dark:text-green-400 px-4 py-3 rounded-lg text-sm">
                            {success}
                        </div>
                    )}

                    <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-3 gap-6">


                        {/* amount wala div  */}
                        <div>
                            <label
                                htmlFor="amount"
                                className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
                            >
                                Amount
                            </label>
                            <input
                                type="number"
                                name="amount"
                                id="amount"
                                required
                                value={formData.amount}
                                onChange={handleChange}
                                className="appearance-none block w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 dark:focus:ring-blue-400 dark:focus:border-blue-400 dark:bg-gray-700 sm:text-sm"
                                placeholder="Enter amount"
                            />
                        </div>


                        {/* category wala div */}
                        <div>
                            <label
                                htmlFor="category"
                                className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
                            >
                                Category
                            </label>
                            <select
                                name="category"
                                id="category"
                                required
                                value={formData.category}
                                onChange={handleChange}
                                className="block w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 dark:focus:ring-blue-400 dark:focus:border-blue-400 dark:bg-gray-700 sm:text-sm"
                            >
                                <option value="">Select a category</option>
                                {categories.map((category) =>{
                                    return(
                                        <option
                                            key={category} value={category}
                                        >
                                            {category}
                                        </option>
                                    );
                                })}

                            </select>
                        </div>



                        {/* description wala input */}
                        <div>
                            <label
                                htmlFor="description"
                                className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
                            >
                                Description (Optional)
                            </label>
                            <input
                                type="text"
                                name="description"
                                id="description"
                                value={formData.description}
                                onChange={handleChange}
                                className="appearance-none block w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 dark:focus:ring-blue-400 dark:focus:border-blue-400 dark:bg-gray-700 sm:text-sm"
                                placeholder="Add a description"
                            />
                        </div>
                        
                        {/*  */}
                        <div className="md:col-span-3">
                            <button
                                type="submit"
                                disabled={loading}
                                className={`w-full flex justify-center py-3 px-4 border border-transparent rounded-lg shadow-sm text-sm font-medium text-white bg-gradient-to-r from-blue-600 to-green-600 hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transform transition-all duration-150 hover:scale-[1.02] ${
                                loading ? "opacity-70 cursor-not-allowed" : ""
                                }`}
                            >
                                {loading? "Adding Expense..." : "Add Expense"}
                            </button>
                        </div>


                    </form>


                </div>

                {/* Expenses List */}
                <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6">
                    <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                        Your Expenses
                    </h2>

                    {fetchingExpenses ? (
                        <div className="text-center text-gray-600 dark:text-gray-400">
                            Loading expenses...
                        </div>
                    ) : expenses.length === 0 ? (
                        <div className="text-center text-gray-600 dark:text-gray-400">
                            No expenses found. Add your first expense above!
                        </div>
                    ) : (
                        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
                            {expenses.map((expense, index) => (
                                <div
                                    key={index}
                                    className="bg-gray-50 dark:bg-gray-700/50 p-4 rounded-lg flex items-center justify-between"
                                >
                                    <div>
                                        <span className="text-sm font-medium text-gray-500 dark:text-gray-400">
                                            {expense.category}
                                        </span>
                                        <p className="text-gray-900 dark:text-white font-medium">
                                            ₹{expense.amount}
                                        </p>
                                        {expense.description && (
                                            <p className="text-sm text-gray-600 dark:text-gray-300">
                                                {expense.description}
                                            </p>
                                        )}
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            </div>
        </div>
    );


}

export default Dashboard;