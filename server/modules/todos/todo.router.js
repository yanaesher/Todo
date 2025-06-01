import {Router} from "express";
import { getAllTodos } from "./todo.controller.js";

const todoRouter = Router();


todoRouter.get('/', getAllTodos);