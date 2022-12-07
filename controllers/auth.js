import asyncHandler from '../utils/asyncHandler.js';
import ErrorResponse from '../utils/ErrorResponse.js';

export const signUp = asyncHandler(async (req, res, next) => {
  res.status(201).json({ token: '123456' });
});

export const signIn = asyncHandler(async (req, res, next) => {
  res.status(201).json({ token: '123456' });
});

export const getUser = asyncHandler(async (req, res, next) => {
  res.status(201).json({ id: 1, name: 'Jorge' });
});
