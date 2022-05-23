import { Router } from "express";
import { accountsRoutes } from "./accounts.routes";
import { balanceRoutes } from "./balance.routes";

const router = Router();

router.use("/accounts", accountsRoutes);
router.use("/balance", balanceRoutes)

export { router };
