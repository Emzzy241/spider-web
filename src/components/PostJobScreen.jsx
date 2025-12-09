// src/components/PostJobScreen.jsx (REVISED AND FORMATTED)
import React, { useState } from 'react';
import Sidebar from './Shared/SideBar'; // ⬅️ IMPORTED
import InputTag from './Shared/InputTag';
import RadioCard from './Shared/RadioCard';

const initialForm = {
  jobTitle: '',
  skillTags: ['UI/UX Design', 'UX Writing', 'No Code dev'],
  selectedSkills: ['UI/UX Design'], // Pre-selected for visual demo
  platformTags: ['Contra', 'LinkedIn', 'Upwork'],
  selectedPlatforms: ['LinkedIn'], // Pre-selected for visual demo
  jobDescription: '',
  employmentType: 'Full time',
  salaryType: 'Hourly',
  amount: '',
  duration: 'Weekly',
  salaryNegotiable: false,
};

const PostJobScreen = () => {
  const [form, setForm] = useState(initialForm);

  const handleTagToggle = (key, tag) => {
    setForm(prev => {
      const current = prev[key];
      if (current.includes(tag)) {
        return { ...prev, [key]: current.filter(t => t !== tag) };
      } else {
        return { ...prev, [key]: [...current, tag] };
      }
    });
  };

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (type === 'checkbox') {
        setForm(prev => ({ ...prev, [name]: checked }));
    } else {
        setForm(prev => ({ ...prev, [name]: value }));
    }
  };

  const handleTypeChange = (key, value) => {
    setForm(prev => ({ ...prev, [key]: value }));
  };

  const renderTagSection = (title, key, initialTags) => (
    <div className="mb-8">
      <h3 className="text-gray-700 font-semibold mb-3">{title}</h3>
      <div className="flex flex-wrap gap-2 mb-3">
        {initialTags.map(tag => (
          <InputTag
            key={tag}
            tag={tag}
            isSelected={key === 'selectedSkills' ? form.selectedSkills.includes(tag) : form.selectedPlatforms.includes(tag)}
            onClick={() => handleTagToggle(key, tag)}
          />
        ))}
      </div>
      <button className="text-sm text-gray-500 font-medium hover:text-red-500 transition-colors">
        Add +
      </button>
    </div>
  );

  return (
    // ⬅️ CORRECT TOP-LEVEL LAYOUT DIV
    <div className="flex h-screen bg-gray-100">
      
      {/* 1. Sidebar Component */}
      <Sidebar /> 
      
      {/* 2. Main Content Area */}
      <div className="flex-1 p-10 bg-gray-50 overflow-y-auto">
        <div className="flex items-center mb-6">
          <div className="text-gray-500 mr-4 cursor-pointer hover:text-gray-700">←</div>
          <h1 className="text-xl font-semibold text-gray-800">Hire across the web</h1>
        </div>
        <p className="text-sm text-gray-500 mb-8">
          Create one job post that connects for freelancers across multiple platforms.
        </p>

        <div className="max-w-3xl bg-white p-8 rounded-xl shadow-lg">
          <h2 className="text-2xl font-bold mb-6">Post A Job</h2>

          {/* Job Title and Image */}
          <div className="flex items-start mb-8">
            <div className="w-24 h-24 rounded-lg mr-6 bg-cover bg-center" 
                 style={{ backgroundImage: `url(https://i.imgur.com/uT0mFwX.jpeg)` }}>
            </div>
            <div className="flex-1 relative">
              <label htmlFor="jobTitle" className="sr-only">Job Title</label>
              <input
                id="jobTitle"
                name="jobTitle"
                type="text"
                placeholder="e.g. UI/UX designer, web developer, cybersecurity ......"
                value={form.jobTitle}
                onChange={handleInputChange}
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-red-500 focus:border-red-500"
              />
              <button className="absolute top-0 right-0 h-full px-6 bg-red-500 text-white font-semibold rounded-r-lg hover:bg-red-600 transition-colors">
                Post Job
              </button>
            </div>
          </div>

          {/* Skill Tags */}
          {renderTagSection("Add Tags For Skill required", "selectedSkills", form.skillTags)}

          {/* Preferred Platforms */}
          {renderTagSection("Preferred Freelancer Platforms", "selectedPlatforms", form.platformTags)}
          <p className="text-xs text-gray-500 -mt-6 mb-8">
              Specify which freelancing platforms this job should target for the right talent.
          </p>

          {/* Job Description */}
          <div className="mb-8">
              <h3 className="text-gray-700 font-semibold mb-3">Job description</h3>
              <textarea
                  name="jobDescription"
                  rows="5"
                  placeholder="Search by name"
                  value={form.jobDescription}
                  onChange={handleInputChange}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-red-500 focus:border-red-500"
              ></textarea>
          </div>

          {/* Employment Type */}
          <div className="mb-8">
              <h3 className="text-gray-700 font-semibold mb-3">Employment type</h3>
              <div className="flex space-x-4">
                  {['Full time', 'Part time', 'On demand'].map(type => (
                      <label key={type} className="flex items-center text-sm font-medium text-gray-700">
                          <input
                              type="checkbox"
                              name="employmentType"
                              checked={form.employmentType === type}
                              onChange={() => handleTypeChange('employmentType', type)}
                              className="form-checkbox text-red-500 h-4 w-4 rounded border-gray-300 focus:ring-red-500"
                          />
                          <span className="ml-2">{type}</span>
                      </label>
                  ))}
              </div>
          </div>

          {/* Salary Type, Amount, Duration */}
          <h3 className="text-gray-700 font-semibold mb-3">Salary Type</h3>
          <div className="flex space-x-4 mb-6">
              <RadioCard
                  label="Hourly"
                  icon="⏱️"
                  isSelected={form.salaryType === 'Hourly'}
                  onClick={() => handleTypeChange('salaryType', 'Hourly')}
              />
              <RadioCard
                  label="Custom"
                  icon="💼"
                  isSelected={form.salaryType === 'Custom'}
                  onClick={() => handleTypeChange('salaryType', 'Custom')}
              />
          </div>

          <div className="flex space-x-4 mb-4">
              <div className="w-1/2">
                  <label htmlFor="amount" className="block text-xs font-medium text-gray-500 mb-1">Amount</label>
                  <input
                      id="amount"
                      name="amount"
                      type="number"
                      placeholder="0.00"
                      value={form.amount}
                      onChange={handleInputChange}
                      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-red-500 focus:border-red-500"
                  />
              </div>
              <div className="w-1/2">
                  <label htmlFor="duration" className="block text-xs font-medium text-gray-500 mb-1">Duration</label>
                  <select
                      id="duration"
                      name="duration"
                      value={form.duration}
                      onChange={handleInputChange}
                      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-red-500 focus:border-red-500"
                  >
                      <option>Weekly</option>
                      <option>Monthly</option>
                      <option>Annually</option>
                      <option>Total Project</option>
                  </select>
              </div>
          </div>

          {/* Negotiable Checkbox */}
          <div className="flex items-center">
              <input
                  id="salaryNegotiable"
                  name="salaryNegotiable"
                  type="checkbox"
                  checked={form.salaryNegotiable}
                  onChange={handleInputChange}
                  className="form-checkbox text-red-500 h-4 w-4 rounded border-gray-300 focus:ring-red-500"
              />
              <label htmlFor="salaryNegotiable" className="ml-2 text-sm font-medium text-gray-700">
                  Salary is negotiable
              </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostJobScreen;