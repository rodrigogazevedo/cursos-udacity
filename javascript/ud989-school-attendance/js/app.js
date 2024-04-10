// Função para gerar um array de valores booleanos aleatórios
function generateRandomAttendance() {
    return Array.from({ length: 12 }, () => Math.random() >= 0.5);
}

// Função para inicializar os registros de presença se não existirem
function initializeAttendanceRecords() {
    if (!localStorage.attendance) {
        console.log('Creating attendance records...');
        var nameColumns = $('tbody .name-col'),
            attendance = {};

        nameColumns.each(function() {
            var name = $(this).text();
            attendance[name] = generateRandomAttendance();
        });

        localStorage.attendance = JSON.stringify(attendance);
    }
}

// Função para atualizar a exibição do número de faltas
function updateMissedCounts() {
    $('tbody .missed-col').each(function() {
        var numMissed = $(this).closest('tr').find('input:not(:checked)').length;
        $(this).text(numMissed);
    });
}

// Função para atualizar as caixas de seleção com base nos registros de presença
function updateCheckboxes() {
    var attendance = JSON.parse(localStorage.attendance);
    $.each(attendance, function(name, days) {
        var studentRow = $('tbody .name-col:contains("' + name + '")').closest('tr');
        studentRow.find('.attend-col input').each(function(i) {
            $(this).prop('checked', days[i]);
        });
    });
}

// Função para lidar com a alteração de caixas de seleção
function handleCheckboxChange() {
    $('tbody input').on('click', function() {
        var newAttendance = {};

        $('tbody .student').each(function() {
            var name = $(this).find('.name-col').text(),
                checkboxes = $(this).find('input');

            newAttendance[name] = checkboxes.map(function() {
                return $(this).prop('checked');
            }).get();
        });

        updateMissedCounts();
        localStorage.attendance = JSON.stringify(newAttendance);
    });
}

// Função principal para inicializar o aplicativo dos estudantes
$(function() {
    initializeAttendanceRecords();
    updateCheckboxes();
    handleCheckboxChange();
    updateMissedCounts();
});
