// Assignment 4

function charReverseHandler (tmp_str) {
    var new_str = ''
    for (let i = 0; i < tmp_str.length; i++) {
        if (tmp_str[i] === tmp_str[i].toLowerCase()) {
            new_str += tmp_str[i].toUpperCase()
        } else {
            new_str += tmp_str[i].toLowerCase()
        }
    }
    return new_str
}

function findDublicatedHandler (my_list) {
    var new_array = new Array()
    var ans = new Array()
    for (let i = 0; i < my_list.length(); i++) {
        if (new_array.includes(my_list[i])) {
            ans.push(my_list[i])
        } else {
            new_array.push(my_list[i])
        }
    }
    return ans
}

function unionHandler (arr1, arr2) {
    var ans = new Array()
    for (let i = 0; i < arr1.length(); i++) {
        if (!new_array.includes(arr1[i])) {
            ans.push(arr1[i])
        }
    }
    for (let i = 0; i < arr2.length(); i++) {
        if (!new_array.includes(arr2[i])) {
            ans.push(arr2[i])
        }
    }
    return ans
}

function unionHandler (arr) {
    var check_arr = ['null', '0', '""', 'false', 'undefined', 'NaN']
    var new_arr = new Array()
    for (let i = 0; i < arr.length(); i++) {
        if (!check_arr.includes(String(arr[i]))) {
            new_arr.push(arr[i])
        }
    }
    return new_arr
}

function reverseStringHandler (text) {
    var arr = Array.from(text)
    arr.sort()
    return arr.join('')
}

const todo = {
    action(e) {
        const target = e.target;
        if (target.classList.contains('todo__action')) {
          const action = target.dataset.todoAction;
          const elemItem = target.closest('.todo__item');
          if (action === 'deleted' && elemItem.dataset.todoState === 'deleted') {
            elemItem.remove();
          } else {
            elemItem.dataset.todoState = action;
          }
          this.save();
        } else if (target.classList.contains('todo__add')) {
          this.add();
          this.save();
        }
      },
    add() {
        const elemText = document.querySelector('.todo__text');
        if (elemText.disabled || !elemText.value.length) {
          return;
        }
        document.querySelector('.todo__items').insertAdjacentHTML('beforeend', this.create(elemText.value));
        elemText.value = '';
      },
    create(text) {
        return `<li class="todo__item" data-todo-state="active">
          <span class="todo__task">${text}</span>
          <span class="todo__action todo__action_restore" data-todo-action="active"></span>
          <span class="todo__action todo__action_complete" data-todo-action="completed"></span>
          <span class="todo__action todo__action_delete" data-todo-action="deleted"></span></li>`;
      },
    init() {
        const fromStorage = localStorage.getItem('todo');
        if (fromStorage) {
          document.querySelector('.todo__items').innerHTML = fromStorage;
        }
        document.querySelector('.todo__options').addEventListener('change', this.update);
        document.addEventListener('click', this.action.bind(this));
      },
    update() {
        const option = document.querySelector('.todo__options').value;
        document.querySelector('.todo__items').dataset.todoOption = option;
        document.querySelector('.todo__text').disabled = option !== 'active';
      },
    save() {
        localStorage.setItem('todo', document.querySelector('.todo__items').innerHTML);
      }
}

todo.init();