const mongoose = require('mongoose')

const blogSchema = new mongoose.Schema(
    {
      title: {
        type: String,
        required: [true, "Blog title is required."],
        trim: true,
        minlength: [5, "Title must be at least 5 characters long"],
        maxlength: [200, "Title cannot exceed 200 characters"]
      },
      content: {
        type: String,
        required: [true, "Blog content is required."],
        minlength: [20, "Content must be at least 20 characters long"]
      },
      image: {
        type: String,
        required: [true, "Blog image URL is required."]
      },
      author: {
        // reference to User
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: [true, "Author is required."]
      },
      category: {
        type: String,
        enum: ["Technology", "Health", "Lifestyle", "Business", "Education", "Other"],
        default: "Other"
      },
      // array of strings
      tags: {
        type: [String],
        default: []
      },
      likes: {
        type: Number,
        default: 0
      },
      comments: [
        {
          user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
          text: { type: String, required: true },
          createdAt: { type: Date, default: Date.now }
        }
      ],
      isPublished: {
        type: Boolean,
        default: false
      }
    },
    // adds createdAt & updatedAt automatically
    {
      timestamps: true 
    }
  );

  const blogModel = mongoose.model('BlogPost',blogSchema)

  module.exports = blogModel;
  