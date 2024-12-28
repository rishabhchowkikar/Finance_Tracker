import { integer, numeric, serial, varchar } from "drizzle-orm/pg-core";
import { pgTable } from "drizzle-orm/pg-core";

export const Budgets = pgTable("budgets", {
  id: serial("id", 255).primaryKey(),
  name: varchar("name", 255).notNull(),
  amount: varchar("amount", 255).notNull(),
  icon: varchar("icons", 255),
  createdBy: varchar("createdBy", 255).notNull(),
});

export const Expenses = pgTable("expenses", {
  id: serial("id").primaryKey(),
  name: varchar("name", 255).notNull(),
  amount: numeric("amount", 255).notNull().default(0),
  budgetId: integer("budgetId").references(() => Budgets.id),
  createdAt: varchar("createdAt", 255).notNull(),
});
