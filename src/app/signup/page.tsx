'use client'

export default function SignupPage() {
  return (
    <div>
      <h1>Signup</h1>
      <form>
        <div>
          <label htmlFor='email'>Email</label>
          <input type='email' id='email' name='email' />
        </div>
        <div>
          <label htmlFor='password'>Password</label>
          <input type='password' id='password' name='password' />
        </div>
        <button type='submit'>Signup</button>
      </form>
    </div>
  )
}
