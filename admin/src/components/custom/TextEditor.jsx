import React, { useState } from 'react';

const TextEditor = () => {
  const [author, setAuthor] = useState('');
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ author, title, description });
    // send to backend API here
  };

  return (
    <main className="p-4">
      <form onSubmit={handleSubmit}>
        <section>
          <div className="flex flex-col gap-2">
            <input
              className="border border-gray-300 hover:border-gray-400 text-md rounded-sm outline-none p-2"
              type="text"
              name="author"
              placeholder="Author Name."
              value={author}
              onChange={(e) => setAuthor(e.target.value)}
            />
            <input
              className="border border-gray-300 hover:border-gray-400 text-md rounded-sm outline-none p-2"
              type="text"
              placeholder="Post Title."
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>
        </section>

        <section className="py-4">
          <textarea
            className="w-full h-72 p-4 border border-gray-300 hover:border-gray-400 text-md rounded-sm outline-none"
            name="textarea"
            placeholder="Write post description.."
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          ></textarea>
        </section>

        <section>
          <div className="flex justify-end gap-4">
            <button
              className="bg-sky-300 hover:bg-sky-400 text-md font-bold px-8 py-2 rounded-sm border-none cursor-pointer"
              type="button"
              onClick={() => console.log('Save as draft')}
            >
              Save as Draft
            </button>
            <button
              className="bg-sky-600 text-white hover:bg-sky-700 text-md font-bold px-8 py-2 rounded-sm border-none cursor-pointer"
              type="submit"
            >
              Publish
            </button>
          </div>
        </section>
      </form>
    </main>
  );
};

export default TextEditor;
