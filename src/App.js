import {Component} from 'react'
import {Switch, Route, Redirect} from 'react-router-dom'
import './App.css'
import LoginForm from './components/LoginForm'
import Home from './components/Home'
import ProtectedRoute from './components/ProtectedRoute'
import ThemeAndVideoContext from './components/context/ThemeAndVideoContext'
import Trending from './components/Trending'
import Gaming from './components/Gaming'
import NotFound from './components/NotFound'
import VideoItemDetails from './components/VIdeoItemDetails'
import SavedVideos from './components/SavedVideos'

// Replace your code here
class App extends Component {
  state = {isDark: false, savedVideos: [], activeTab: 'Home'}

  changeTab = tab => {
    this.setState({activeTab: tab})
  }

  toggleTheme = () => {
    const {isDark} = this.state
    this.setState({isDark: !isDark})
  }

  addVideo = video => {
    const {savedVideos} = this.state
    const index = savedVideos.findIndex(eachVideo => eachVideo.id === video.id)
    if (index === -1) {
      this.setState({savedVideos: [...savedVideos, video]})
    } else {
      savedVideos.splice(index, 1)
      this.setState({savedVideos})
    }
  }

  render() {
    const {isDark, savedVideos, activeTab} = this.state
    return (
      <ThemeAndVideoContext.Provider
        value={{
          isDark,
          savedVideos,
          toggleTheme: this.toggleTheme,
          changeTab: this.changeTab,
          addVideo: this.addVideo,
          activeTab,
        }}
      >
        <Switch>
          <Route exact path="/login" component={LoginForm} />
          <ProtectedRoute exact path="/" component={Home} />
          <ProtectedRoute exact path="/trending" component={Trending} />
          <ProtectedRoute exact path="/gaming" component={Gaming} />
          <ProtectedRoute exact path="/saved-videos" component={SavedVideos} />
          <ProtectedRoute
            exact
            path="/videos/:id"
            component={VideoItemDetails}
          />
          <Route path="/not-found" component={NotFound} />
          <Redirect to="not-found" />
        </Switch>
      </ThemeAndVideoContext.Provider>
    )
  }
}
export default App
