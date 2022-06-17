## React-Route-Dom

https://reactrouter.com/docs/en/v6/getting-started/overview

##### Basic Routing Components

```react
<Link />
<NavLink />
<Routes />
<Route />
<Navigate />
<BrowserRouter />
<HashRouter />
<Outlet />
```



##### Basic Hooks

```jsx
useRoutes()	// 配置路由表

useParams()
useSearchParams()
useLocation()
useMatch()

useNavigate()

useRouterContext()	// 判断当前是否在路由环境下
useNavigationType()	// 判断navigation的类型，有push, replace, pop
useOutlet()	// 显示已挂在的路由对象
useResolvedPath() // 解析给定URL的，解析其中的path, search, hash
```



##### Define Routing

```react
<div className="list-group">
  {/* the entire App has been wrapped by the <BrowserRouter> */}
  <Link className="list-group-item" to="/about">About</Link>
  <Link className="list-group-item" to="/home">Home</Link>
</div> 
```



##### Register Routing

```react
<Routes>
	<Route path="/about" element={<About />} />
	<Route path="/home" element={<Home />} />
</Routes> 
```



##### NavLink

```react
<NavLink className={({ isActive }) => isActive ? "list-group-item active" : "list-group-item" } />
```



##### Navigate

```react
<Route path="*" element={<Navigate to="/about" />} /> 
```



##### MyNavLink Capsulation

```react
import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

export default class MyNavLink extends Component {
  render() {
    return (
      <NavLink
        className={({ isActive }) => isActive ? "list-group-item diyActive" : "list-group-item"}
        {...this.props}
      />
    )
  }
} 
```



##### Nested Routing

```react
// Home组件
return (
<div>
  <h3>Home</h3>
  <div>
    <ul className='nav nav-tabs'>
      <li>
        <MyNavLink to="/home/news">News</MyNavLink>
      </li>
      <li>
        <MyNavLink to="/home/message">Message</MyNavLink>
      </li>
    </ul>
    <Outlet />
  </div>
</div>
) 
```

```react
<Routes>
  <Route path="/about" element={<About />} />
  <Route path="/home/*" element={<Home />}>
    <Route path="news" element={<News />} />
    <Route path="message" element={<Message />} />
    <Route path="*" element={<Navigate to="/home/news" />} />
  </Route>
  <Route path="*" element={<Navigate to="/about" />} />
</Routes>
```



##### useRoutes()

```jsx
const ROUTING_TABLE = useRoutes([
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/home/*",
    element: <Home />,
    children: [
      {
        path: "news",
        element: <News />,
      },
      {
        path: "message",
        element: <Message />,
        children: [
          {
            path: "detail/:id/:title",
            element: <Detail />,
          },
        ],
      },
      {
        path: "*",
        element: <Navigate to="/home/news" />,
      },
    ],
  },
  {
    path: "/",
    element: <Navigate to="/about" />,
  },
]);
```



##### Passing params to the routing component

```react
// Passing params to component Detail
<Link to={`/home/message/detail/${messageObj.id}/${messageObj.title}`}>{messageObj.title}</Link> 
<Outlet />
```

```react
<Route path="message" element={<Message />} >
  <Route path="detail/:id/:title" element={<Detail />} />
</Route>
```

```react
export default function Detail() {
  
  /* params */
  const params = useParams(); //hook
  
  return (
    <ul>
      <li>Id:{params.id}</li>
      <li>Title:{params.title}</li>
      <li>Content:{content.content}</li>
    </ul>
  );
}
```



##### Passing searchParams to the routing component

```react
// Passing searchParams to component Detail
<Link to={`/home/message/detail/?id=${messageObj.id}&title=${messageObj.title}`}>{messageObj.title}</Link> 
<Outlet />
```

```react
<Route path="message" element={<Message />} >
  <Route path="detail" element={<Detail />} />
</Route>
```

```react
export default function Detail() {
  
  /* searchParams */
  const [searchParams] = useSearchParams(); // hook
  const params = {
    id: searchParams.get('id'),
    title: searchParams.get('title'),
  }
  
  return (
    <ul>
      <li>Id:{params.id}</li>
      <li>Title:{params.title}</li>
      <li>Content:{content.content}</li>
    </ul>
  );
}
```



 ##### Passing stateParams to the routing component

```react
// Passing searchParams to component Detail
<Link to={`/home/message/detail`} state={{id: msgObj.id, title: msgObj.title}}>{messageObj.title}</Link> 
<Outlet />
```

```react
<Route path="message" element={<Message />} >
  <Route path="detail" element={<Detail />} />
</Route>
```

```react
export default function Detail() {
  
  /* searchParams */
  const location = useLocation(); // hook
  const stateObj = location.state || {} // if there's no lication, stateObj is an empty dic
  const params = {
   	id: stateObj.id,
    title: stateObj.title
  } 
  
  return (
    <ul>
      <li>Id:{params.id}</li>
      <li>Title:{params.title}</li>
      <li>Content:{content.content}</li>
    </ul>
  );
}
```



##### useNavigation

```react
const navigate = useNavigate(); // hook

function goBack() {
  navigate(-1);
}
function goForward() {
  navigate(1);
}
function goHome() {
  navigate("/about", { replace: true });
}
function pushShow(msgObj) {
  return function () {
    navigate(`/home/message/detail/${msgObj.id}/${msgObj.title}`);
  };
}
function replaceShow(msgObj) {
  return function () {
    navigate(`/home/message/detail/${msgObj.id}/${msgObj.title}`, {
      replace: true,
    });
  };
}
useEffect(() => {
  setTimeout(() => {
    navigate(`/home/message`);
  }, 3000);
});
```

