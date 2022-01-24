import Header from "./Header"

export default function Layout({ children }) {
    return (
        <div>
            <Header/>
            <h2>I am the Layout component</h2>
            {children}
        </div>
    )
}