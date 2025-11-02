import React, { useState } from 'react';
import { Globe, Search, BarChart3, TrendingUp, Users, ExternalLink, CheckCircle, AlertTriangle, XCircle, Eye, Clock, Target, Zap, Shield, Settings, Database, FileText, Calendar, Activity } from 'lucide-react';

const App = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const [selectedPost, setSelectedPost] = useState(null);

  // Mock data
  const seoMetrics = {
    overallScore: 87,
    traffic: { current: 12450, previous: 10200, change: 22.06 },
    rankings: { current: 156, previous: 134, change: 16.42 },
    impressions: { current: 89200, previous: 76500, change: 16.60 },
    ctr: { current: 4.2, previous: 3.8, change: 10.53 }
  };

  const topKeywords = [
    { keyword: 'react dashboard tutorial', position: 3, impressions: 1250, ctr: 8.2 },
    { keyword: 'admin panel design', position: 5, impressions: 980, ctr: 6.1 },
    { keyword: 'seo optimization tools', position: 8, impressions: 756, ctr: 4.8 },
    { keyword: 'blog seo best practices', position: 12, impressions: 543, ctr: 3.2 },
    { keyword: 'react seo components', position: 15, impressions: 421, ctr: 2.9 }
  ];

  const posts = [
    { id: 1, title: 'Building Modern Admin Dashboards with React', status: 'published', seoScore: 92, traffic: 2340, keywords: 8, lastUpdated: '2024-01-15' },
    { id: 2, title: 'SEO Best Practices for Blog Content', status: 'published', seoScore: 88, traffic: 1890, keywords: 12, lastUpdated: '2024-01-12' },
    { id: 3, title: 'Optimizing Page Speed for Better Rankings', status: 'draft', seoScore: 76, traffic: 0, keywords: 5, lastUpdated: '2024-01-10' },
    { id: 4, title: 'Advanced React Hooks for Performance', status: 'published', seoScore: 95, traffic: 3120, keywords: 15, lastUpdated: '2024-01-08' },
    { id: 5, title: 'Meta Tags and Schema Markup Guide', status: 'scheduled', seoScore: 84, traffic: 0, keywords: 9, lastUpdated: '2024-01-05' }
  ];

  const issues = [
    { id: 1, type: 'warning', title: 'Missing meta descriptions', count: 3, affected: 'Blog posts' },
    { id: 2, type: 'error', title: 'Broken internal links', count: 2, affected: 'Pages' },
    { id: 3, type: 'info', title: 'Duplicate title tags', count: 1, affected: 'Archive pages' },
    { id: 4, type: 'warning', title: 'Slow page load speed', count: 4, affected: 'Media-heavy posts' }
  ];

  const tabs = [
    { id: 'overview', label: 'Overview', icon: Globe },
    { id: 'keywords', label: 'Keywords', icon: Search },
    { id: 'content', label: 'Content', icon: FileText },
    { id: 'issues', label: 'Issues', icon: AlertTriangle },
    { id: 'analytics', label: 'Analytics', icon: BarChart3 }
  ];

  const getStatusColor = (status) => {
    switch (status) {
      case 'published': return 'text-green-600 bg-green-100';
      case 'draft': return 'text-gray-600 bg-gray-100';
      case 'scheduled': return 'text-blue-600 bg-blue-100';
      default: return 'text-gray-600 bg-gray-100';
    }
  };

  const getIssueIcon = (type) => {
    switch (type) {
      case 'error': return <XCircle className="w-4 h-4 text-red-500" />;
      case 'warning': return <AlertTriangle className="w-4 h-4 text-yellow-500" />;
      case 'info': return <CheckCircle className="w-4 h-4 text-green-500" />;
      default: return <AlertTriangle className="w-4 h-4 text-gray-500" />;
    }
  };

  const MetricCard = ({ title, value, change, icon: Icon, isPercentage = false }) => (
    <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm font-medium text-gray-600">{title}</p>
          <p className="text-2xl font-bold text-gray-900 mt-1">
            {value}{isPercentage && '%'}
          </p>
          {change !== undefined && (
            <div className="flex items-center mt-2">
              <span className={`text-sm font-medium ${change >= 0 ? 'text-green-600' : 'text-red-600'}`}>
                {change >= 0 ? '+' : ''}{change.toFixed(2)}%
              </span>
              <span className="text-sm text-gray-500 ml-2">vs last period</span>
            </div>
          )}
        </div>
        <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
          <Icon className="w-6 h-6 text-blue-600" />
        </div>
      </div>
    </div>
  );

  const renderOverview = () => (
    <div className="space-y-0">
      {/* SEO Score */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl p-6 text-white">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-lg font-medium">Overall SEO Score</h3>
            <p className="text-blue-100 mt-1">Your site's SEO health and performance</p>
          </div>
          <div className="text-right">
            <div className="text-3xl font-bold">{seoMetrics.overallScore}/100</div>
            <div className="text-sm text-blue-100 mt-1">Good</div>
          </div>
        </div>
        <div className="mt-4 w-full bg-blue-500 rounded-full h-2">
          <div 
            className="bg-white h-2 rounded-full transition-all duration-500"
            style={{ width: `${seoMetrics.overallScore}%` }}
          ></div>
        </div>
      </div>

      {/* Metrics Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <MetricCard
          title="Organic Traffic"
          value={seoMetrics.traffic.current.toLocaleString()}
          change={seoMetrics.traffic.change}
          icon={Users}
        />
        <MetricCard
          title="Keyword Rankings"
          value={seoMetrics.rankings.current}
          change={seoMetrics.rankings.change}
          icon={TrendingUp}
        />
        <MetricCard
          title="Impressions"
          value={seoMetrics.impressions.current.toLocaleString()}
          change={seoMetrics.impressions.change}
          icon={Eye}
        />
        <MetricCard
          title="Click-Through Rate"
          value={seoMetrics.ctr.current}
          change={seoMetrics.ctr.change}
          icon={Target}
          isPercentage={true}
        />
      </div>

      {/* Top Keywords */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200">
        <div className="px-6 py-4 border-b border-gray-200">
          <h3 className="text-lg font-semibold text-gray-900">Top Performing Keywords</h3>
        </div>
        <div className="p-6">
          <div className="space-y-4">
            {topKeywords.map((keyword, index) => (
              <div key={index} className="flex items-center justify-between p-3 hover:bg-gray-50 rounded-lg transition-colors">
                <div className="flex items-center space-x-4">
                  <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center text-sm font-medium text-blue-600">
                    {index + 1}
                  </div>
                  <div>
                    <p className="font-medium text-gray-900">{keyword.keyword}</p>
                    <p className="text-sm text-gray-500">Position: {keyword.position}</p>
                  </div>
                </div>
                <div className="flex items-center space-x-6 text-sm">
                  <span className="text-gray-600">{keyword.impressions.toLocaleString()} impressions</span>
                  <span className="text-gray-600">{keyword.ctr}% CTR</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      
    </div>
  );

  const renderKeywords = () => (
    <div className="space-y-6">
      <div className="bg-white rounded-xl shadow-sm border border-gray-200">
        <div className="px-6 py-4 border-b border-gray-200">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-semibold text-gray-900">Keyword Research & Tracking</h3>
            <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-sm font-medium">
              Add Keywords
            </button>
          </div>
        </div>
        <div className="p-6">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-200">
                  <th className="text-left py-3 px-4 font-medium text-gray-900">Keyword</th>
                  <th className="text-left py-3 px-4 font-medium text-gray-900">Position</th>
                  <th className="text-left py-3 px-4 font-medium text-gray-900">Volume</th>
                  <th className="text-left py-3 px-4 font-medium text-gray-900">Difficulty</th>
                  <th className="text-left py-3 px-4 font-medium text-gray-900">Status</th>
                  <th className="text-left py-3 px-4 font-medium text-gray-900">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {[
                  { keyword: 'react admin dashboard', position: 3, volume: 2400, difficulty: 'Medium', status: 'Tracking' },
                  { keyword: 'seo dashboard react', position: 8, volume: 1200, difficulty: 'Easy', status: 'Tracking' },
                  { keyword: 'blog seo optimization', position: 12, volume: 3600, difficulty: 'Hard', status: 'Opportunity' },
                  { keyword: 'react seo components', position: 15, volume: 890, difficulty: 'Medium', status: 'Tracking' },
                  { keyword: 'admin panel seo', position: 22, volume: 1500, difficulty: 'Hard', status: 'Opportunity' }
                ].map((item, index) => (
                  <tr key={index} className="hover:bg-gray-50">
                    <td className="py-3 px-4">
                      <div className="font-medium text-gray-900">{item.keyword}</div>
                    </td>
                    <td className="py-3 px-4">
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                        #{item.position}
                      </span>
                    </td>
                    <td className="py-3 px-4 text-gray-600">{item.volume.toLocaleString()}</td>
                    <td className="py-3 px-4">
                      <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                        item.difficulty === 'Easy' ? 'bg-green-100 text-green-800' :
                        item.difficulty === 'Medium' ? 'bg-yellow-100 text-yellow-800' :
                        'bg-red-100 text-red-800'
                      }`}>
                        {item.difficulty}
                      </span>
                    </td>
                    <td className="py-3 px-4">
                      <span className="text-sm text-gray-600">{item.status}</span>
                    </td>
                    <td className="py-3 px-4">
                      <button className="text-blue-600 hover:text-blue-800 text-sm font-medium">
                        View Details
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* Keyword Opportunities */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200">
        <div className="px-6 py-4 border-b border-gray-200">
          <h3 className="text-lg font-semibold text-gray-900">Keyword Opportunities</h3>
        </div>
        <div className="p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              { keyword: 'nextjs seo dashboard', volume: 1800, difficulty: 'Medium', potential: 'High' },
              { keyword: 'react seo analytics', volume: 950, difficulty: 'Easy', potential: 'High' },
              { keyword: 'blog seo tools', volume: 4200, difficulty: 'Hard', potential: 'Medium' }
            ].map((opp, index) => (
              <div key={index} className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
                <div className="flex items-start justify-between mb-3">
                  <h4 className="font-medium text-gray-900">{opp.keyword}</h4>
                  <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                    {opp.potential} Potential
                  </span>
                </div>
                <div className="space-y-2 text-sm text-gray-600">
                  <div className="flex justify-between">
                    <span>Volume:</span>
                    <span>{opp.volume.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Difficulty:</span>
                    <span>{opp.difficulty}</span>
                  </div>
                </div>
                <button className="mt-3 w-full px-3 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-sm font-medium">
                  Track Keyword
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );

  const renderContent = () => (
    <div className="space-y-6">
      <div className="bg-white rounded-xl shadow-sm border border-gray-200">
        <div className="px-6 py-4 border-b border-gray-200">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-semibold text-gray-900">Content SEO Analysis</h3>
            <div className="flex space-x-2">
              <select className="px-3 py-2 border border-gray-300 rounded-lg text-sm">
                <option>All Status</option>
                <option>Published</option>
                <option>Draft</option>
                <option>Scheduled</option>
              </select>
              <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-sm font-medium">
                New Post
              </button>
            </div>
          </div>
        </div>
        <div className="p-6">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-200">
                  <th className="text-left py-3 px-4 font-medium text-gray-900">Title</th>
                  <th className="text-left py-3 px-4 font-medium text-gray-900">Status</th>
                  <th className="text-left py-3 px-4 font-medium text-gray-900">SEO Score</th>
                  <th className="text-left py-3 px-4 font-medium text-gray-900">Traffic</th>
                  <th className="text-left py-3 px-4 font-medium text-gray-900">Keywords</th>
                  <th className="text-left py-3 px-4 font-medium text-gray-900">Last Updated</th>
                  <th className="text-left py-3 px-4 font-medium text-gray-900">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {posts.map((post) => (
                  <tr key={post.id} className="hover:bg-gray-50">
                    <td className="py-3 px-4">
                      <div className="font-medium text-gray-900 max-w-xs truncate">{post.title}</div>
                    </td>
                    <td className="py-3 px-4">
                      <span className={`inline-flex px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(post.status)}`}>
                        {post.status}
                      </span>
                    </td>
                    <td className="py-3 px-4">
                      <div className="flex items-center space-x-2">
                        <div className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold ${
                          post.seoScore >= 90 ? 'bg-green-100 text-green-800' :
                          post.seoScore >= 80 ? 'bg-yellow-100 text-yellow-800' :
                          'bg-red-100 text-red-800'
                        }`}>
                          {post.seoScore}
                        </div>
                        {post.seoScore >= 90 && <CheckCircle className="w-4 h-4 text-green-500" />}
                      </div>
                    </td>
                    <td className="py-3 px-4 text-gray-600">
                      {post.traffic > 0 ? post.traffic.toLocaleString() : '-'}
                    </td>
                    <td className="py-3 px-4 text-gray-600">{post.keywords}</td>
                    <td className="py-3 px-4 text-gray-600">{post.lastUpdated}</td>
                    <td className="py-3 px-4">
                      <div className="flex space-x-2">
                        <button 
                          onClick={() => setSelectedPost(post)}
                          className="text-blue-600 hover:text-blue-800 text-sm font-medium"
                        >
                          Optimize
                        </button>
                        <button className="text-gray-600 hover:text-gray-800 text-sm font-medium">
                          View
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* Content Optimization Modal */}
      {selectedPost && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="px-6 py-4 border-b border-gray-200 flex items-center justify-between">
              <h3 className="text-lg font-semibold text-gray-900">Optimize: {selectedPost.title}</h3>
              <button 
                onClick={() => setSelectedPost(null)}
                className="text-gray-400 hover:text-gray-600"
              >
                <XCircle className="w-5 h-5" />
              </button>
            </div>
            <div className="p-6 space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Meta Title</label>
                    <input
                      type="text"
                      defaultValue={selectedPost.title}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                    <p className="text-xs text-gray-500 mt-1">58/60 characters</p>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Meta Description</label>
                    <textarea
                      rows={3}
                      defaultValue="Learn how to build modern admin dashboards with React and optimize for SEO performance."
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                    <p className="text-xs text-gray-500 mt-1">142/160 characters</p>
                  </div>
                </div>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Focus Keyword</label>
                    <input
                      type="text"
                      defaultValue="react admin dashboard"
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Related Keywords</label>
                    <textarea
                      rows={3}
                      defaultValue="react dashboard, admin panel, seo dashboard, react seo"
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>
                </div>
              </div>
              
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                <div className="flex items-start">
                  <Zap className="w-5 h-5 text-blue-600 mt-0.5 mr-3" />
                  <div>
                    <h4 className="text-sm font-medium text-blue-800">SEO Recommendations</h4>
                    <ul className="text-sm text-blue-700 mt-1 space-y-1">
                      <li>• Add more internal links to related content</li>
                      <li>• Optimize images with descriptive alt tags</li>
                      <li>• Include focus keyword in first 100 words</li>
                      <li>• Add schema markup for better rich snippets</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="flex justify-end space-x-3">
                <button 
                  onClick={() => setSelectedPost(null)}
                  className="px-4 py-2 text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
                >
                  Cancel
                </button>
                <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                  Save Optimization
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );

  const renderIssues = () => (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-red-50 border border-red-200 rounded-xl p-6">
          <div className="flex items-center">
            <XCircle className="w-6 h-6 text-red-600 mr-3" />
            <div>
              <p className="text-2xl font-bold text-red-900">2</p>
              <p className="text-sm text-red-700">Critical Issues</p>
            </div>
          </div>
        </div>
        <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-6">
          <div className="flex items-center">
            <AlertTriangle className="w-6 h-6 text-yellow-600 mr-3" />
            <div>
              <p className="text-2xl font-bold text-yellow-900">3</p>
              <p className="text-sm text-yellow-700">Warnings</p>
            </div>
          </div>
        </div>
        <div className="bg-green-50 border border-green-200 rounded-xl p-6">
          <div className="flex items-center">
            <CheckCircle className="w-6 h-6 text-green-600 mr-3" />
            <div>
              <p className="text-2xl font-bold text-green-900">12</p>
              <p className="text-sm text-green-700">Best Practices</p>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-xl shadow-sm border border-gray-200">
        <div className="px-6 py-4 border-b border-gray-200">
          <h3 className="text-lg font-semibold text-gray-900">SEO Issues & Recommendations</h3>
        </div>
        <div className="p-6">
          <div className="space-y-4">
            {issues.map((issue) => (
              <div key={issue.id} className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
                <div className="flex items-start justify-between">
                  <div className="flex items-start space-x-3">
                    {getIssueIcon(issue.type)}
                    <div>
                      <h4 className="font-medium text-gray-900">{issue.title}</h4>
                      <p className="text-sm text-gray-600 mt-1">
                        Affects {issue.affected} • {issue.count} {issue.count === 1 ? 'item' : 'items'}
                      </p>
                    </div>
                  </div>
                  <button className="px-3 py-1 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-sm font-medium">
                    Fix Issue
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="bg-white rounded-xl shadow-sm border border-gray-200">
        <div className="px-6 py-4 border-b border-gray-200">
          <h3 className="text-lg font-semibold text-gray-900">Technical SEO Audit</h3>
        </div>
        <div className="p-6">
          <div className="space-y-4">
            {[
              { title: 'Mobile Responsiveness', status: 'passed', details: 'All pages are mobile-friendly' },
              { title: 'Page Speed', status: 'warning', details: 'Average load time: 3.2s (target: <2s)' },
              { title: 'SSL Certificate', status: 'passed', details: 'Valid SSL certificate installed' },
              { title: 'XML Sitemap', status: 'passed', details: 'Sitemap.xml is properly configured' },
              { title: 'Robots.txt', status: 'warning', details: 'Some pages are accidentally blocked' },
              { title: 'Structured Data', status: 'error', details: 'Missing schema markup on blog posts' }
            ].map((audit, index) => (
              <div key={index} className="flex items-center justify-between p-3 border border-gray-200 rounded-lg">
                <div>
                  <h4 className="font-medium text-gray-900">{audit.title}</h4>
                  <p className="text-sm text-gray-600 mt-1">{audit.details}</p>
                </div>
                <div>
                  {audit.status === 'passed' && <CheckCircle className="w-5 h-5 text-green-500" />}
                  {audit.status === 'warning' && <AlertTriangle className="w-5 h-5 text-yellow-500" />}
                  {audit.status === 'error' && <XCircle className="w-5 h-5 text-red-500" />}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );

  const renderAnalytics = () => (
    <div className="space-y-6">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Traffic Trends</h3>
          <div className="h-64 bg-gray-50 rounded-lg flex items-center justify-center">
            <div className="text-center">
              <Activity className="w-12 h-12 text-gray-400 mx-auto mb-2" />
              <p className="text-gray-500">Traffic chart would appear here</p>
            </div>
          </div>
        </div>
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Top Performing Pages</h3>
          <div className="space-y-3">
            {posts.slice(0, 5).map((post, index) => (
              <div key={index} className="flex items-center justify-between p-3 hover:bg-gray-50 rounded-lg">
                <div className="font-medium text-gray-900 truncate max-w-xs">{post.title}</div>
                <div className="text-sm text-gray-600">{post.traffic.toLocaleString()} views</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="bg-white rounded-xl shadow-sm border border-gray-200">
        <div className="px-6 py-4 border-b border-gray-200">
          <h3 className="text-lg font-semibold text-gray-900">Search Console Integration</h3>
        </div>
        <div className="p-6">
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6">
            <div className="flex items-start">
              <Shield className="w-5 h-5 text-blue-600 mt-0.5 mr-3" />
              <div>
                <h4 className="text-sm font-medium text-blue-800">Connected to Google Search Console</h4>
                <p className="text-sm text-blue-700 mt-1">
                  Your site is connected to Google Search Console. Data is updated daily.
                </p>
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-medium text-gray-900 mb-3">Recent Search Queries</h4>
              <div className="space-y-2">
                {topKeywords.slice(0, 4).map((keyword, index) => (
                  <div key={index} className="flex items-center justify-between text-sm">
                    <span className="text-gray-600">{keyword.keyword}</span>
                    <span className="text-gray-900">{keyword.impressions.toLocaleString()} impressions</span>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h4 className="font-medium text-gray-900 mb-3">Index Coverage</h4>
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">Valid pages</span>
                  <span className="font-medium text-green-600">124</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">Excluded pages</span>
                  <span className="font-medium text-yellow-600">8</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">Errors</span>
                  <span className="font-medium text-red-600">2</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const renderContentByTab = () => {
    switch (activeTab) {
      case 'overview': return renderOverview();
      case 'keywords': return renderKeywords();
      case 'content': return renderContent();
      case 'issues': return renderIssues();
      case 'analytics': return renderAnalytics();
      default: return renderOverview();
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
          {/* Header */}
          <div className="px-6 py-4 border-b border-gray-200">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                <Globe className="w-5 h-5 text-green-600" />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-gray-900">SEO Dashboard</h1>
                <p className="text-gray-600">Monitor and optimize your blog's search engine performance</p>
              </div>
            </div>
          </div>

          <div className="flex flex-col lg:flex-row">
            {/* Sidebar */}
            <div className="lg:w-64 lg:border-r border-gray-200">
              <nav className="p-4">
                <div className="space-y-1">
                  {tabs.map((tab) => {
                    const Icon = tab.icon;
                    return (
                      <button
                        key={tab.id}
                        onClick={() => setActiveTab(tab.id)}
                        className={`w-full flex items-center space-x-3 px-3 py-2 text-left rounded-lg transition-colors ${
                          activeTab === tab.id
                            ? 'bg-green-50 text-green-700 border-r-2 border-green-700'
                            : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
                        }`}
                      >
                        <Icon className="w-4 h-4" />
                        <span className="font-medium">{tab.label}</span>
                      </button>
                    );
                  })}
                </div>
              </nav>
            </div>

            {/* Main Content */}
            <div className="flex-1">
              <div className="p-6">
                {renderContentByTab()}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
