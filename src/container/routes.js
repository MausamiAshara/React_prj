import React, { lazy, useState } from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import AuthGuard from '../components/auth'
import Signup from '../pages/Signup'

// const Layout = lazy(() => import('../components/layout'))
const LogIn = lazy(() => import('../pages/LogIn'))
const ChangePassword = lazy(() => import('../pages/ChangePassword'))
const ForgotPassword = lazy(() => import('../pages/ForgotPassword'))


const PageLayout = lazy(() => import('../pages/Layout'))

const Dashboard = lazy(() => import('../pages/Dashboard'))
const FunderManagement = lazy(() => import('../pages/FunderManagement'))
const NewFunderRequest = lazy(() => import('../pages/FunderManagement/NewFunderRequest'))
const BrokerManagement = lazy(() => import('../pages/BrokerManagement'))
const NewBrokerRequest = lazy(() => import('../pages/BrokerManagement/NewBrokerRequest'))
const CompanyManagement = lazy(() => import('../pages/CompanyManagement'))
// const InterestsManagement = lazy(() => import('../pages/InterestsManagement'))

const ManagePrivacyPolicy = lazy(() => import('../pages/CMSManagement/ManagePrivacy'))
const ManageTerms = lazy(() => import('../pages/CMSManagement/ManageTerms'))
const ManageAmounts = lazy(() => import('../pages/AppDataManagement/ManageAmounts '))
const ManageIndustries = lazy(() => import('../pages/AppDataManagement/ManageIndustries'))
const ManageRates = lazy(() => import('../pages/AppDataManagement/ManageRates'))
const ManageStates = lazy(() => import('../pages/AppDataManagement/ManageStates'))
const ManageLoanTags = lazy(() => import('../pages/AppDataManagement/ManageLoanTags '))
const ManageTermLength = lazy(() => import('../pages/AppDataManagement/ManageTermLength'))
const ManageUpsell = lazy(() => import('../pages/AppDataManagement/ManageUpsell'))
const AllPost = lazy(() => import('../pages/PostManagement'))
// const ReportedPost = lazy(() => import('../pages/PostManagement/ReportedPost'))
const CommentPost = lazy(() => import('../pages/PostManagement/CommentPost'))
const AllForums = lazy(() => import('../pages/ForumsManagement'))
const CommentForum = lazy(() => import('../pages/ForumsManagement/CommentForum'))
const ReportedForums = lazy(() => import('../pages/ForumsManagement/ReportedForums'))
const AllArticles = lazy(() => import('../pages/ArticleManagement'))
const CommentArticle = lazy(() => import('../pages/ArticleManagement/CommentArticle'))
const ReportedArticles = lazy(() => import('../pages/ArticleManagement/ReportedArticles'))
const BlockedBrokers = lazy(() => import('../pages/BlockedUserManagement/BlockedBrokers'))
const BlockedFunders = lazy(() => import('../pages/BlockedUserManagement/BlockedFunders'))
const NotificationManagement = lazy(() => import('../pages/NotificationManagement'))
const CategoryManagement = lazy(() => import('../pages/CategoryManagement'))
const LoanManagement = lazy(() => import('../pages/LoanManagement'))
const ReviewManagement = lazy(() => import('../pages/ReviewManagement'))
const Subscription = lazy(() => import('../pages/Subscription'))

const Routing = () => {

	const [container, setContainer] = useState(null);

	return (
		<Routes>

			<Route path="/login" element={<LogIn />} />
			<Route path="/signup" element={<Signup />} />
			<Route path="/forgot-password" element={<ForgotPassword />} />
			<Route path="/change-password" element={<ChangePassword />} />
			<Route path="/" element={<PageLayout setContainer={setContainer} container={container} />}>
				<Route path="/" element={<Navigate replace to="/dashboard" />} />
				<Route path="/dashboard" element={<FunderManagement />} />
			</Route>
			<Route path="/" element={<AuthGuard><PageLayout setContainer={setContainer} container={container} /></AuthGuard>}>
				{/* <Route path="/funder-management" element={<FunderManagement />} /> */}
				<Route path="/rejected-data" element={<NewFunderRequest />} />
				<Route path="/broker-management" element={<BrokerManagement />} />
				<Route path="/new-broker-request" element={<NewBrokerRequest />} />
				<Route path="/company-management" element={<CompanyManagement />} />
				{/* <Route path="/interests-management" element={<InterestsManagement />} /> */}
				<Route path="/cms-management/privacy" element={<ManagePrivacyPolicy />} />
				<Route path="/cms-management/terms" element={<ManageTerms />} />

				<Route path="/app-data-management/amount" element={<ManageAmounts />} />
				<Route path="/app-data-management/industries" element={<ManageIndustries />} />
				<Route path="/app-data-management/rates" element={<ManageRates />} />
				<Route path="/app-data-management/states" element={<ManageStates />} />
				<Route path="/app-data-management/loan-tags" element={<ManageLoanTags />} />
				<Route path="/app-data-management/term-length" element={<ManageTermLength />} />
				<Route path="/app-data-management/upsell" element={<ManageUpsell />} />

				<Route path="/post-management/all-post" element={<AllPost />} />
				<Route path="/post-management/all-post/:postId/post-comment" element={<CommentPost />} />
				<Route path="/post-management/reported-post" element={<AllPost />} />

				<Route path="/submit-information" element={<AllForums />} />
				<Route path="/forums-management/all-forums/:forumId/forum-comment" element={<CommentForum />} />
				<Route path="/forums-management/reported-forums" element={<ReportedForums />} />

				<Route path="/articles-management/all-articles" element={<AllArticles />} />
				<Route path="/article-management/all-article/:articleId/article-comment" element={<CommentArticle />} />
				<Route path="/articles-management/reported-articles" element={<ReportedArticles />} />
				<Route path="/articles-management/all-articles" element={<AllArticles />} />
				<Route path="/articles-management/reported-articles" element={<ReportedArticles />} />

				<Route path="/blocked-management/brokers" element={<BlockedBrokers />} />
				<Route path="/blocked-management/funders" element={<BlockedFunders />} />

				<Route path="/notification-managements" element={<NotificationManagement />} />

				<Route path="/category-managements" element={<CategoryManagement />} />
				<Route path="/loan-managements" element={<LoanManagement />} />
				<Route path="/review-managements" element={<ReviewManagement />} />
				<Route path="/subscription-management" element={<Subscription />} />
			</Route>
			<Route path="*" element={<Navigate replace to={'/'} />} />
		</Routes>
	);
}

export default Routing;
