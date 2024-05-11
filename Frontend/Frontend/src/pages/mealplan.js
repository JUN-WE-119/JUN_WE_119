import React, { useState, useEffect } from "react";

const MealPlanPage = () => {
  const [mealPlans, setMealPlans] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedMealPlan, setSelectedMealPlan] = useState(null);
  const [updatedMealPlan, setUpdatedMealPlan] = useState({
    title: "",
    category: "",
    description: "",
  });

  useEffect(() => {
    fetchMealPlans();
  }, []);

  const fetchMealPlans = async () => {
    try {
      const response = await fetch("http://localhost:8080/api/meal-plans");
      if (!response.ok) {
        throw new Error("Failed to fetch meal plans");
      }
      const data = await response.json();
      setMealPlans(data);
    } catch (error) {
      console.error("Error fetching meal plans:", error);
    }
  };

  const handleMealPlanClick = (mealPlan) => {
    setSelectedMealPlan(mealPlan);
    setIsModalOpen(true);
  };

  const handleDeleteMealPlan = async (id) => {
    try {
      const response = await fetch(
        `http://localhost:8080/api/meal-plans/${id}`,
        {
          method: "DELETE",
        }
      );
      if (!response.ok) {
        throw new Error("Failed to delete meal plan");
      }
      // Update mealPlans state after successful deletion
      setMealPlans(mealPlans.filter((mealPlan) => mealPlan.id !== id));
    } catch (error) {
      console.error("Error deleting meal plan:", error);
    }
  };

  const handleUpdateMealPlan = async () => {
    try {
      const response = await fetch(
        `http://localhost:8080/api/meal-plans/${selectedMealPlan.id}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(updatedMealPlan),
        }
      );
      if (!response.ok) {
        throw new Error("Failed to update meal plan");
      }
      // Refresh meal plans after successful update
      fetchMealPlans();
      setIsModalOpen(false); // Close the update form
    } catch (error) {
      console.error("Error updating meal plan:", error);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUpdatedMealPlan((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  return (
    <div className="container mx-auto py-8">
    <h1 className="text-4xl font-bold text-green-600 mb-8 text-center">
      Meal Plans
    </h1>
    <div className="flex flex-col gap-6">
      {mealPlans.map((mealPlan) => (
        <div
          key={mealPlan.id}
          className="bg-base-100 shadow-xl flex p-4 rounded-lg"
          onClick={() => handleMealPlanClick(mealPlan)}
        >
         
          <div className="flex-1">
            <h2 className="text-2xl font-bold mb-2">{mealPlan.title}</h2>
            <p className="mb-2">
              <span className="font-semibold">Category:</span>{" "}
              {mealPlan.category}
            </p>
            <p>{mealPlan.description}</p>
          </div>
        </div>
      ))}
    </div>

     {/* Update Form Modal */}
{isModalOpen && (
  <div className="modal modal-open">
    <div className="modal-box relative">
      <label
        htmlFor="meal-plan-modal"
        className="btn btn-sm btn-circle absolute right-2 top-2"
        onClick={() => setIsModalOpen(false)}
      >
        ✕
      </label>
      <h3 className="text-xl font-bold mb-4">Update Meal Plan</h3>
      {selectedMealPlan && (
        <div>
          <div className="form-control mb-2">
            <label className="label">
              <span className="label-text">Title</span>
            </label>
            <input
              type="text"
              name="title"
              value={updatedMealPlan.title || selectedMealPlan.title}
              onChange={handleInputChange}
              placeholder="Enter title"
              className="input input-bordered"
            />
          </div>
          <div className="form-control mb-2">
            <label className="label">
              <span className="label-text">Category</span>
            </label>
            <input
              type="text"
              name="category"
              value={updatedMealPlan.category || selectedMealPlan.category}
              onChange={handleInputChange}
              placeholder="Enter category"
              className="input input-bordered"
            />
          </div>
          <div className="form-control mb-4">
            <label className="label">
              <span className="label-text">Description</span>
            </label>
            <textarea
              name="description"
              value={updatedMealPlan.description || selectedMealPlan.description}
              onChange={handleInputChange}
              placeholder="Enter description"
              className="textarea textarea-bordered"
            ></textarea>
          </div>
          <div className="flex justify-end gap-2">
            <button
              className="btn btn-primary"
              onClick={handleUpdateMealPlan}
            >
              Update
            </button>
            <button
              className="btn btn-error"
              onClick={() => handleDeleteMealPlan(selectedMealPlan.id)}
            >
              Delete
            </button>
          </div>
        </div>
      )}
    </div>
  </div>
)}
    </div>
  );
};

export default MealPlanPage;