﻿using FctmsDemoApp.Application.Common.Models;
using FctmsDemoApp.Domain.Entities;

namespace FctmsDemoApp.Application.TodoLists.Queries.GetTodos;

public class TodosVm
{
    public IReadOnlyCollection<LookupDto> PriorityLevels { get; init; } = Array.Empty<LookupDto>();

    public IReadOnlyCollection<TodoListDto> Lists { get; init; } = Array.Empty<TodoListDto>();
    
    public TodoItem? NextDue { get; set; }
}
