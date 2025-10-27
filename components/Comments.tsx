"use client";

import { useState } from "react";

interface Comment {
  id: string;
  name: string;
  email: string;
  message: string;
  date: string;
  rating: number;
}

export default function Comments({ reviewName }: { reviewName: string }) {
  const [comments, setComments] = useState<Comment[]>([]);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    rating: 5,
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const newComment: Comment = {
      id: Date.now().toString(),
      name: formData.name,
      email: formData.email,
      message: formData.message,
      date: new Date().toISOString().split("T")[0],
      rating: parseInt(formData.rating.toString()),
    };

    setComments([newComment, ...comments]);
    setFormData({ name: "", email: "", message: "", rating: 5 });
    setSubmitted(true);

    setTimeout(() => setSubmitted(false), 3000);
  };

  const renderStars = (rating: number) => {
    return "⭐".repeat(rating);
  };

  return (
    <section className="mt-16 pt-8 border-t">
      <h2 className="text-3xl font-bold mb-8">Comments & Reviews</h2>

      {/* Comments Form */}
      <div className="bg-blue-50 p-6 rounded-lg mb-8">
        <h3 className="text-xl font-bold mb-4">Share Your Experience</h3>

        {submitted && (
          <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded mb-4">
            ✅ Thank you! Your comment has been posted.
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label htmlFor="name" className="block font-semibold mb-2">
                Name *
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                placeholder="Your name"
              />
            </div>

            <div>
              <label htmlFor="email" className="block font-semibold mb-2">
                Email *
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                placeholder="your@email.com"
              />
            </div>
          </div>

          <div>
            <label htmlFor="rating" className="block font-semibold mb-2">
              Rating *
            </label>
            <select
              id="rating"
              name="rating"
              value={formData.rating}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
            >
              <option value={5}>⭐⭐⭐⭐⭐ 5 - Excellent</option>
              <option value={4}>⭐⭐⭐⭐ 4 - Very Good</option>
              <option value={3}>⭐⭐⭐ 3 - Good</option>
              <option value={2}>⭐⭐ 2 - Fair</option>
              <option value={1}>⭐ 1 - Poor</option>
            </select>
          </div>

          <div>
            <label htmlFor="message" className="block font-semibold mb-2">
              Your Comment *
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows={4}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
              placeholder="Share your experience with this hosting provider..."
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded-lg font-bold hover:bg-blue-700 transition"
          >
            Post Comment
          </button>
        </form>
      </div>

      {/* Comments List */}
      <div className="space-y-4">
        <h3 className="text-xl font-bold mb-4">
          {comments.length} {comments.length === 1 ? "Comment" : "Comments"}
        </h3>

        {comments.length === 0 ? (
          <p className="text-gray-600">
            No comments yet. Be the first to share your experience!
          </p>
        ) : (
          comments.map((comment) => (
            <div
              key={comment.id}
              className="bg-white p-4 rounded-lg border border-gray-200 hover:shadow-md transition"
            >
              <div className="flex justify-between items-start mb-2">
                <div>
                  <h4 className="font-bold text-gray-900">{comment.name}</h4>
                  <p className="text-sm text-gray-600">{comment.email}</p>
                </div>
                <span className="text-sm text-gray-500">{comment.date}</span>
              </div>

              <div className="mb-2">
                <span className="text-yellow-500">{renderStars(comment.rating)}</span>
              </div>

              <p className="text-gray-700">{comment.message}</p>
            </div>
          ))
        )}
      </div>
    </section>
  );
}
