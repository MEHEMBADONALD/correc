$(document).ready(function () {
    $('form').submit(function (e) { 
        e.preventDefault();
        var val=$('input').val();

        if (val==='') {
            $('input').addClass('is-invalid');
        } else {
            $('input').removeClass('is-invalid');

            $('.list-group').append(
                `<li class="list-group-item d-flex justify-content-between align-items-center">
                    ${val}
                    <span class="badge rounded-pill">
                        <span><i class="fa fa-check text-success fs-5 me-3" style="cursor: pointer;" aria-hidden="true"></i></span>
                        <span><i class="fa fa-trash text-danger fs-5" style="cursor: pointer;" aria-hidden="true"></i></span>
                    </span>
                </li>`
            );
        }
    });

    $('.list-group').on('click','.fa-check', function () {
        $(this).parent().parent().parent().toggleClass('bar')
    });

    $('.list-group').on('click','.fa-trash', function () {
        $(this).parent().parent().parent().remove()
    });
});