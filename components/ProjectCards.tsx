import { FC } from "react";
import { Prisma } from "@prisma/client";
import  Card from './Card'
import clsx from "clsx";

const projectWithTasks = Prisma.validator<Prisma.ProjectArgs> 
