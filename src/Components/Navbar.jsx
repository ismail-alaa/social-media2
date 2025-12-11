
import { useContext, useState, useEffect, } from 'react'
import { NavbarBrand, NavbarItem, Button, Navbar as NavbarAuth, NavbarContent } from '@heroui/react';
import { useNavigate } from 'react-router-dom';
import { authContext } from '../Contexts/AuthContext';
import logo from "../assets/8a4521fa-0109-4bfa-8366-dd70aa3e5085.jpg";

export default function Navbar() {
  const navigate = useNavigate();
  const { isLogin, setIsLogin } = useContext(authContext)
  const [theme, setTheme] = useState(null);
  function logOut() {
    localStorage.removeItem("token")
    setIsLogin(false)
    navigate("/login")
  }

  useEffect(() => {
    if (!("theme" in localStorage)) {
      if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
        document.documentElement.classList.add("dark")
        setTheme("dark")
      } else if (window.matchMedia("(prefers-color-scheme: light)").matches) {
        setTheme("light")
      }
    }
    if (("theme" in localStorage)) {
      if (localStorage.getItem("theme") == "dark") {
        document.documentElement.classList.add("dark")
        setTheme("dark")
      } else if (localStorage.getItem("theme") == "light") {
        setTheme("light")

      }
    }
  }, [])
  function toggleTheme() {
    document.documentElement.classList.toggle("dark");
    if (theme == "dark") {
      localStorage.setItem("theme", "light")
      setTheme("light")
    } else if (theme == "light") {
      localStorage.setItem("theme", "dark")
      setTheme("dark")
    }


  }

  return (
    <>
      <NavbarAuth className='mx-0  sticky  top-0 right-0 left-0'>
          <NavbarBrand>
          <button onClick={() => navigate("/")}>
            <div className="flex items-center gap-2">
              <img
                className="w-18 h-18 object-cover rounded-full"
                src={logo}
                alt="logo"
              />
             
            </div>
          </button>
        </NavbarBrand>
        <NavbarContent className="sm:flex gap-4" justify="center">
          {
            isLogin ?
              <Button onPress={logOut} className='ml-2' color="danger" variant="flat">
                Sign Out
              </Button>
              :
              <>
                <NavbarItem className="flex">
                  <Button onPress={() => navigate("/login")} color="default" variant="flat">
                    Login
                  </Button>
                </NavbarItem>
                <NavbarItem>
                  <Button onPress={() => navigate("/register")} color="primary" variant="flat">
                    Sign Up
                  </Button>
                </NavbarItem>
              </>

          }
        </NavbarContent>
        <button className='mr-4' onClick={toggleTheme}> {theme === "dark" ? (

          <i className="fa-solid fa-sun text-yellow-400" />
        ) : (
          <i className="fa-solid fa-moon text-gray-600" />
        )}</button>
      </NavbarAuth>
    </>
  )
}
