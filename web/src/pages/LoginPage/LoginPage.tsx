import { useRef } from 'react'
import { useEffect } from 'react'

import {
  Form,
  Label,
  PasswordField,
  Submit,
  FieldError,
  EmailField,
} from '@redwoodjs/forms'
import { Link, navigate, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'
import { toast, Toaster } from '@redwoodjs/web/toast'

import { useAuth } from 'src/auth'
import ShowHidePassword from 'src/components/ShowHidePassword/ShowHidePassword'
import HeaderWithRulers from 'src/components/HeaderWithRulers/HeaderWithRulers'

const LoginPage = () => {
  const { isAuthenticated, logIn } = useAuth()

  useEffect(() => {
    if (isAuthenticated) {
      navigate(routes.dashboard())
    }
  }, [isAuthenticated])

  const emailRef = useRef<HTMLInputElement>(null)
  useEffect(() => {
    emailRef.current?.focus()
  }, [])

  const onSubmit = async (data: Record<string, string>) => {
    const response = await logIn({
      username: data.email,
      password: data.password,
    })

    if (response.message) {
      toast(response.message)
    } else if (response.error) {
      toast.error(response.error)
    } else {
      toast.success('Welcome back!')
    }
  }

  return (
    <>
      <MetaTags title="Login" />

      <main className="rw-main">
        <Toaster toastOptions={{ className: 'rw-toast', duration: 6000 }} />

        <Form onSubmit={onSubmit} className="mb=10">
          <div className="max-w-[660px] mx-auto">
            <HeaderWithRulers className={"text-white mb-8"} heading={"LOGIN"} />
            <div className="field relative">
              <Label
                name="email"
                errorClassName="error"
              >
                Email
              </Label>
              <EmailField
                name="email"
                errorClassName="error"
                placeholder=""
                ref={emailRef}
                validation={{
                  required: {
                    value: true,
                    message: 'Email is required',
                  },
                }}
              />
              <FieldError name="email" className="error-message" />
            </div>

            <ShowHidePassword
              label="Password"
              name="password"
              errorClassName="error"
              autoComplete="current-password"
              placeholder=""
              validation={{
                required: {
                  value: true,
                  message: 'Password is required',
                },
              }}
            />

            <FieldError name="password" className="error-message" />
            <div className="rw-button-group">
              <Submit>Login</Submit>
            </div>
          </div>
        </Form>
        <div className="text-center text-white">
          <div className="rw-login-link">
            <Link to={routes.signup()} className="underline hover:no-underline">
              Need an Account?
            </Link>
            {' ∙ '}
            <Link to={routes.forgotPassword()} className="underline hover:no-underline">
              Forgot Password?
            </Link>
          </div>
        </div>
      </main>
    </>
  )
}

export default LoginPage
