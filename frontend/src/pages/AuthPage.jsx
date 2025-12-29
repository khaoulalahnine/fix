import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { login, register } from '../features/auth/authSlice';
import { useNavigate } from 'react-router-dom';

export default function AuthPage() {
  const [mode, setMode] = useState('login');
  const [form, setForm] = useState({ name: '', email: '', password: '' });
  const [err, setErr] = useState(null);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onSubmit = async (e) => {
    e.preventDefault();
    setErr(null);
    try {
      if (mode === 'login') {
        await dispatch(login({ email: form.email, password: form.password })).unwrap();
        navigate('/');
      } else {
        await dispatch(register({ name: form.name, email: form.email, password: form.password })).unwrap();
        // auto login after register
        await dispatch(login({ email: form.email, password: form.password })).unwrap();
        navigate('/');
      }
    } catch (error) {
      setErr(error?.message || 'Auth failed');
    }
  };

  return (
    <div className="max-w-md mx-auto mt-16 p-6 bg-white rounded shadow">
      <h2 className="text-2xl font-bold mb-4">{mode === 'login' ? 'Login' : 'Register'}</h2>
      <form onSubmit={onSubmit} className="flex flex-col gap-3">
        {mode === 'register' && (
          <input placeholder="Name" value={form.name} onChange={e => setForm({...form, name: e.target.value})} className="p-2 border rounded" />
        )}
        <input placeholder="Email" value={form.email} onChange={e => setForm({...form, email: e.target.value})} className="p-2 border rounded" />
        <input type="password" placeholder="Password" value={form.password} onChange={e => setForm({...form, password: e.target.value})} className="p-2 border rounded" />
        <button type="submit" className="bg-blue-600 text-white py-2 rounded">{mode === 'login' ? 'Login' : 'Register'}</button>
        {err && <div className="text-red-500 mt-2">{err}</div>}
      </form>
      <div className="mt-3 text-sm">
        {mode === 'login' ? (
          <p>Don't have an account? <button onClick={() => setMode('register')} className="text-blue-600">Register</button></p>
        ) : (
          <p>Already have an account? <button onClick={() => setMode('login')} className="text-blue-600">Login</button></p>
        )}
      </div>
    </div>
  );
}
