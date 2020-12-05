import { Router } from "express";
import { createUseController } from "./useCases/CreateUser";

const router = Router()

router.post('/users', (request, response) => {
    return createUseController.handle(request, response);
});

export { router }