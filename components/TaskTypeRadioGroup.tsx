"use client";

import CheckIcon from "@/icons/CheckIcon";
import { useBoardStore } from "@/store/BoardStore";
import { RadioGroup } from "@headlessui/react";

const types = [
  {
    id: "todo",
    name: "Por hacer",
    description: "Una nueva tarea por empezar",
    color: "bg-amber-500",
    colorText: "text-amber-500",
  },
  {
    id: "inprogress",
    name: "En progreso",
    description: "Una tarea que actualmente se está haciendo",
    color: "bg-lime-500",
    colorText: "text-lime-500",
  },
  {
    id: "done",
    name: "Hecho",
    description: "Una tarea que ha sido completada",
    color: "bg-green-500",
    colorText: "text-green-500",
  },
];

function TaskTypeRadioGroup() {
  const [newTaskType, setNewTaskType] = useBoardStore((state) => [
    state.newTaskType,
    state.setNewTaskType,
  ]);

  return (
    <div className="w-full py-5">
      <div className="mx-auto w-full max-w-md bg">
        <RadioGroup value={newTaskType} onChange={(e) => setNewTaskType(e)}>
          <div className="space-y-2">
            {types.map((type) => (
              <RadioGroup.Option
                key={type.id}
                value={type.id}
                className={({ active, checked }) =>
                  `${
                    active
                      ? "ring-2 ring-white ring-opacity-60 ring-offset-2 ring-offset-sky-300"
                      : ""
                  } ${
                    checked
                      ? `${type.color} bg-opacity-75 text-white`
                      : "bg-white"
                  }
                    relative flex cursor-pointer rounded-lg p-5 shadow-md focus:outline-none
                  `
                }
              >
                {({ active, checked }) => (
                  <>
                    <div className="flex w-full items-center justify-between">
                      <div className="flex items-center">
                        <div className="text-sm">
                          <RadioGroup.Label
                            as="p"
                            className={`font-semibold ${
                              checked ? "text-white" : "text-gray-900"
                            }`}
                          >
                            {type.name}
                          </RadioGroup.Label>
                          <RadioGroup.Description
                            as="span"
                            className={`inline ${
                              checked ? "text-white" : "text-gray-900"
                            }`}
                          >
                            <span>{type.description}</span>
                          </RadioGroup.Description>
                        </div>
                      </div>
                      {checked && (
                        <div className="rounded-full p-[6px] bg-white">
                          <CheckIcon className={`size-4 ${type.colorText}`} />
                        </div>
                      )}
                    </div>
                  </>
                )}
              </RadioGroup.Option>
            ))}
          </div>
        </RadioGroup>
      </div>
    </div>
  );
}

export default TaskTypeRadioGroup;
